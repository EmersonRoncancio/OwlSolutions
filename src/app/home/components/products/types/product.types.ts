/**
 * Interfaz que ilustra cada producto. En lugar de una foto, cada bloque dibuja la
 * pantalla que el negocio va a usar: el cierre de caja, el hilo del agente y el
 * pipeline. El discriminante elige cuál se arma.
 */
export type ProductArtifact = 'pos' | 'agent' | 'pipeline';

/** Un candidato del srcset: el archivo y su ancho real en pixeles. */
export interface ProductPhotoSource {
  readonly src: string;
  readonly width: number;
}

/** Recorte con fondo transparente de una persona usando el producto. */
export interface ProductPhoto {
  /** Respaldo para navegadores sin WebP. */
  readonly png: string;
  /**
   * Candidatos WebP de menor a mayor. Cada producto declara los suyos en vez de
   * asumir una lista fija: hasta donde se puede llegar depende del original del que
   * se recorto, y una pantalla a 2x pide el doble de pixeles de los que ocupa la
   * foto en CSS. Quedarse corto aqui es lo que se ve como una imagen borrosa.
   */
  readonly sources: readonly ProductPhotoSource[];
  readonly alt: string;
  /** Tamaño intrinseco de referencia; fija la proporcion y evita saltos de layout. */
  readonly width: number;
  readonly height: number;
}

export interface Product {
  readonly id: string;
  /** Categoría corta; el índice (01, 02, 03) lo pone el listado. */
  readonly eyebrow: string;
  /** Nombre comercial del producto. */
  readonly name: string;
  /**
   * Qué es el producto, en una línea. Va debajo del nombre porque el nombre solo no
   * dice nada a quien llega de una búsqueda: aqui es donde viven las palabras por las
   * que la pagina se encuentra.
   */
  readonly tagline: string;
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
