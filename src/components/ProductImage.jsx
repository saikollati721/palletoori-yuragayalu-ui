export default function ProductImage({ src, alt, className = "", eager = false, width = 1200, height = 1200, ...rest }) {
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
  const loading = eager ? "eager" : "lazy";
  const fetchPriority = eager ? "high" : "auto";

  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchpriority={fetchPriority}
        decoding="async"
        className={className}
        {...rest}
      />
    </picture>
  );
}
