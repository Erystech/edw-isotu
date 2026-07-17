/**
 * formatDate
 * Converts an ISO date string ("2024-07-15") into a display format
 * ("July 15, 2024"). Centralized so date formatting stays consistent
 * across ArticleCard, ArticleDetail, and anywhere else dates surface.
 */
export function formatDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`);

  if (Number.isNaN(date.getTime())) return isoDate;

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}