import Image, { type ImageProps } from 'next/image';

type PlaceImageProps = Omit<ImageProps, 'quality' | 'loading'> & {
  quality?: number;
  loading?: ImageProps['loading'];
};

/** Gambar tempat — lazy load default, quality balanced untuk performa. */
export function PlaceImage({
  quality = 85,
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, 50vw',
  className,
  priority,
  ...props
}: PlaceImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt || 'Image'}
      priority={priority}
      loading={priority ? undefined : loading}
      quality={quality}
      sizes={sizes}
      className={className}
    />
  );
}
