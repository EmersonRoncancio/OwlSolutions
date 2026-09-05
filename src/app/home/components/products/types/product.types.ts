/**
 * Interfaz que ilustra cada producto. En lugar de una foto, cada bloque dibuja la
 * pantalla que el negocio va a usar: el cierre de caja, el hilo del agente y el
 * pipeline. El discriminante elige cuál se arma.
 */
export type ProductArtifact = 'pos' | 'agent' | 'pipeline';

/** Recorte con fondo transparente de una persona usando el producto. */
export interface ProductPhoto {
  readonly png: string;
  readonly webp: string;
  readonly webpSmall: string;
  readonly webpMedium: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface Product {
  readonly id: string;
  /** Categoría corta; el índice (01, 02, 03) lo pone el listado. */
  readonly eyebrow: string;
  readonly name: string;
  readonly description: string;
  /** Etiquetas cortas de venta, para leer el producto de un vistazo. */
  readonly badges: readonly string[];
  readonly features: readonly string[];
  readonly useCase: string;
  readonly cta: string;
  readonly ctaHref: string;
  readonly artifact: ProductArtifact;
  readonly photo: ProductPhoto;
}
