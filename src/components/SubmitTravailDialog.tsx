'use client';

import { useState, Suspense } from 'react';
import { useMutation, useLazyLoadQuery } from 'react-relay';
import {
  Dialog,
  Adapt,
  Sheet,
  Button,
  Input,
  Text,
  YStack,
  XStack,
  Spinner,
  ScrollView,
} from 'tamagui';
import { IconUpload, IconFileUpload } from '@tabler/icons-react';
import { SUBMIT_TRAVAIL_MUTATION } from '@/src/relay/mutations/SubmitTravailMutation';
import { AJOUTER_DOCUMENT_MUTATION } from '@/src/relay/mutations/AjouterDocumentMutation';
import { TROUVER_ENSEIGNANTS_QUERY } from '@/src/relay/queries/TrouverEnseignantsQuery';
import { uploadDocument } from '@/src/services/supabase';

interface SubmitTravailDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

function SubmitTravailDialogContent({ isOpen, onOpenChange, onSuccess }: SubmitTravailDialogProps) {
  // Récupérer les enseignants
  const enseignantsData = useLazyLoadQuery(TROUVER_ENSEIGNANTS_QUERY, {});
  const enseignants = enseignantsData?.enseignants || [];

  // State du formulaire
  const [titre, setTitre] = useState('');
  const [resume, setResume] = useState('');
  const [motsCles, setMotsCles] = useState('');
  const [typeTravail, setTypeTravail] = useState('MEMOIRE');
  const [encadrantId, setEncadrantId] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  // State du traitement
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Mutations
  const [commitSubmitTravail] = useMutation(SUBMIT_TRAVAIL_MUTATION);
  const [commitAjouterDocument] = useMutation(AJOUTER_DOCUMENT_MUTATION);

  // Gestion de sélection de fichier
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Seuls les fichiers PDF sont acceptés');
        return;
      }
      if (file.size > 50 * 1024 * 1024) { // 50MB max
        setError('Le fichier dépasse 50MB');
        return;
      }
      setPdfFile(file);
      setFileName(file.name);
      setError(null);
    }
  };

  // Soumission du formulaire
  const handleSubmit = async () => {
    if (!titre || !typeTravail) {
      setError('Titre et type de travail sont obligatoires');
      return;
    }

    if (!encadrantId) {
      setError('Veuillez sélectionner un enseignant');
      return;
    }

    if (!pdfFile) {
      setError('Veuillez sélectionner un fichier PDF');
      return;
    }

    setIsLoading(true);
    setError(null);
    setUploadProgress(0);

    try {
      // Étape 1: Soumettre le travail
      setUploadProgress(30);
      let travailId: string | null = null;

      await new Promise<void>((resolve, reject) => {
        commitSubmitTravail({
          variables: {
            titre,
            typeTravail,
            resume: resume || undefined,
            motsCles: motsCles || undefined,
            encadrantId,
          },
          onCompleted: (response: any) => {
            if (response.submitTravail?.success) {
              travailId = response.submitTravail.travail.id;
              resolve();
            } else {
              reject(new Error(response.submitTravail?.message || 'Erreur lors de la soumission'));
            }
          },
          onError: reject,
        });
      });

      if (!travailId) {
        throw new Error('ID du travail non reçu');
      }

      // Étape 2: Uploader le PDF sur Supabase
      setUploadProgress(60);
      const { url, error: uploadError } = await uploadDocument(pdfFile);
      if (uploadError || !url) {
        throw new Error(uploadError || 'Erreur lors de l\'upload');
      }

      // Étape 3: Ajouter le document via GraphQL
      setUploadProgress(90);

      await new Promise<void>((resolve, reject) => {
        commitAjouterDocument({
          variables: {
            travailId,
            nomFichier: fileName,
            typeDocument: 'MEMOIRE_PDF',
            url,
            tailleOctets: pdfFile.size,
          },
          onCompleted: (response: any) => {
            if (response.ajouterDocument?.success) {
              resolve();
            } else {
              reject(new Error(response.ajouterDocument?.message || 'Erreur lors del\'enregistrement du document'));
            }
          },
          onError: reject,
        });
      });

      setUploadProgress(100);

      // Succès!
      setTimeout(() => {
        setIsLoading(false);
        setTitre('');
        setResume('');
        setMotsCles('');
        setTypeTravail('MEMOIRE');
        setEncadrantId('');
        setPdfFile(null);
        setFileName('');
        setUploadProgress(0);
        onOpenChange(false);
        onSuccess?.();
      }, 500);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
      setIsLoading(false);
    }
  };

  return (
    <Dialog modal open={isOpen} onOpenChange={onOpenChange}>
      <Adapt when="sm" platform="touch">
        <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap="$5">
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={['transform', 'opacity']}
          animation={['quick']}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$4"
          width={600}
          maxWidth={'95%'}
          f={1}
          display="flex"
          flexDirection="column"
        >
          <Dialog.Title fontSize={22} fontWeight={'700'} color={'$primary'}>
            Soumettre votre travail
          </Dialog.Title>

          <Dialog.Description fontSize={14} color={'gray'}>
            Complétez le formulaire et sélectionnez votre mémoire en PDF
          </Dialog.Description>

          <ScrollView showsVerticalScrollIndicator={false} flex={1}>
            <YStack gap="$4" p="$2">
              {/* Titre */}
              <YStack gap="$2">
                <Text fontWeight={'600'} fontSize={14}>
                  Titre du mémoire *
                </Text>
                <Input
                  placeholder="Entrez le titre de votre mémoire"
                  value={titre}
                  onChangeText={setTitre}
                  editable={!isLoading}
                  size="$4"
                />
              </YStack>

              {/* Type de travail */}
              <YStack gap="$2">
                <Text fontWeight={'600'} fontSize={14}>
                  Type de travail *
                </Text>
                <select
                  value={typeTravail}
                  onChange={(e) => setTypeTravail(e.target.value)}
                  disabled={isLoading}
                  style={{
                    padding: 10,
                    borderRadius: 6,
                    border: '1px solid #e0e0e0',
                    fontFamily: 'inherit',
                    fontSize: 14,
                  }}
                >
                  <option value="MEMOIRE">Mémoire</option>
                  <option value="THESE">Thèse</option>
                  <option value="RAPPORT">Rapport</option>
                </select>
              </YStack>

              {/* Sélectionner un enseignant */}
              <YStack gap="$2">
                <Text fontWeight={'600'} fontSize={14}>
                  Enseignant superviseur *
                </Text>
                <select
                  value={encadrantId}
                  onChange={(e) => setEncadrantId(e.target.value)}
                  disabled={isLoading}
                  style={{
                    padding: 10,
                    borderRadius: 6,
                    border: '1px solid #e0e0e0',
                    fontFamily: 'inherit',
                    fontSize: 14,
                    backgroundColor: encadrantId ? 'white' : '#f5f5f5',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    opacity: isLoading ? 0.6 : 1,
                  }}
                >
                  <option value="">-- Sélectionnez un enseignant --</option>
                  {enseignants.map((enseignant: any) => (
                    <option key={enseignant.id} value={enseignant.id}>
                      {enseignant.utilisateur?.firstName} {enseignant.utilisateur?.lastName} - {enseignant.gradeDisplay}
                      {enseignant.specialite ? ` (${enseignant.specialite})` : ''}
                    </option>
                  ))}
                </select>
              </YStack>

              {/* Résumé */}
              <YStack gap="$2">
                <Text fontWeight={'600'} fontSize={14}>
                  Résumé
                </Text>
                <Input
                  placeholder="Entrez un résumé de votre travail"
                  value={resume}
                  onChangeText={setResume}
                  editable={!isLoading}
                  multiline
                  numberOfLines={4}
                  size="$4"
                />
              </YStack>

              {/* Mots clés */}
              <YStack gap="$2">
                <Text fontWeight={'600'} fontSize={14}>
                  Mots-clés
                </Text>
                <Input
                  placeholder="Ex: machine learning, IA, data science"
                  value={motsCles}
                  onChangeText={setMotsCles}
                  editable={!isLoading}
                  size="$4"
                />
              </YStack>

              {/* Upload PDF */}
              <YStack gap="$2">
                <Text fontWeight={'600'} fontSize={14}>
                  Fichier PDF du mémoire *
                </Text>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px dashed #0e3cb3',
                    borderRadius: 8,
                    padding: 20,
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    backgroundColor: '#f0f7ff',
                    opacity: isLoading ? 0.5 : 1,
                  }}
                >
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileSelect}
                    disabled={isLoading}
                    style={{ display: 'none' }}
                  />
                  <YStack alignItems="center" gap="$2">
                    <IconFileUpload size={40} color="#0e3cb3" />
                    <Text textAlign="center" color="#0e3cb3" fontWeight={'600'}>
                      {fileName || 'Cliquez ou glissez votre PDF'}
                    </Text>
                    <Text fontSize={12} color="gray">
                      Max 50MB
                    </Text>
                  </YStack>
                </label>
              </YStack>

              {/* Progression */}
              {isLoading && (
                <YStack gap="$2">
                  <XStack alignItems="center" gap="$2">
                    <Spinner size="small" />
                    <Text fontSize={14} color="gray">
                      Envoi en cours... {uploadProgress}%
                    </Text>
                  </XStack>
                </YStack>
              )}

              {/* Erreur */}
              {error && (
                <YStack bg="$red2" p="$3" br="$2">
                  <Text color="$red10" fontWeight={'600'}>
                    {error}
                  </Text>
                </YStack>
              )}
            </YStack>
          </ScrollView>

          {/* Actions */}
          <XStack justifyContent="flex-end" gap="$3" pt="$4">
            <Button
              onPress={() => onOpenChange(false)}
              disabled={isLoading}
              theme="alt1"
            >
              Annuler
            </Button>
            <Button
              onPress={handleSubmit}
              disabled={isLoading || !titre || !typeTravail || !encadrantId || !pdfFile}
              bg="$primary"
              color="white"
              icon={isLoading ? <Spinner color="white" /> : <IconUpload size={20} />}
            >
              {isLoading ? 'Envoi...' : 'Soumettre'}
            </Button>
          </XStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

export default function SubmitTravailDialog({ isOpen, onOpenChange, onSuccess }: SubmitTravailDialogProps) {
  return (
    <Suspense fallback={
      <Dialog modal open={isOpen} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Content
            bordered
            elevate
            gap="$4"
            width={600}
            maxWidth={'95%'}
            display="flex"
            flexDirection="column"
            jc="center"
            ai="center"
          >
            <Spinner size="large" />
            <Text>Chargement des enseignants...</Text>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    }>
      <SubmitTravailDialogContent isOpen={isOpen} onOpenChange={onOpenChange} onSuccess={onSuccess} />
    </Suspense>
  );
}
