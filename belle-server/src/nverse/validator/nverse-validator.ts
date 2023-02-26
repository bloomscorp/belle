export interface NverseValidator<E> {
	validate: (entity: E) => boolean
}
