export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return 'À venir';
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

export function formatTime(time: string | null | undefined): string {
  if (!time) return 'Horaire à confirmer';
  
  // Suppose format HH:mm
  return time;
}

export function getProgressColor(percentage: number | null | undefined): string {
  if (!percentage || percentage === 0) return '#808080';
  if (percentage < 30) return '#17a2b8';
  if (percentage < 60) return '#FFB74D';
  return '#28a745';
}

export function getProgressLabel(percentage: number | null | undefined): string {
  if (!percentage || percentage === 0) return 'Not started';
  if (percentage < 30) return 'Just started';
  if (percentage < 60) return 'In progress';
  if (percentage < 100) return 'Almost done';
  return 'Completed';
}

export function statusColor(statut: string | null | undefined): string {
  const colors: Record<string, string> = {
    'SOUMIS': '#17a2b8',
    'EN_ATTENTE_VALIDATION': '#FFB74D',
    'ACCEPTE': '#28a745',
    'REJETE': '#dc3545',
  };
  return colors[statut || ''] || '#808080';
}

export function statusBgColor(statut: string | null | undefined): string {
  const colors: Record<string, string> = {
    'SOUMIS': '#17a2b81a',
    'EN_ATTENTE_VALIDATION': '#FFB74D1a',
    'ACCEPTE': '#28a7451a',
    'REJETE': '#dc35451a',
  };
  return colors[statut || ''] || '#f0f0f0';
}
