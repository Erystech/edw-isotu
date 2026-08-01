export function PageMeta({
  title = 'Edwin Isotu',
  description,
  image = 'https://edwinisotu.com/og-image.jpg',
  url = '/',
  keywords = '',
  type = 'website'
}) {
  const fullTitle = title !== 'Edwin Isotu' ? `${title} | Edwin Isotu` : title;
  const fullUrl = `https://edwinisotu.com${url}`;

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
      
      <link rel="canonical" href={fullUrl} />
    </>
  );
}