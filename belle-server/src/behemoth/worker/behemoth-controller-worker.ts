export interface BehemothControllerWorker<R> {
	work: () => R
}
