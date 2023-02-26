import {BehemothControllerWorker} from "../worker/behemoth-controller-worker.js";

export interface GetEntityController {
	getEntity: <W extends BehemothControllerWorker<string>>(
		request: any,
		methodName: string,
		surveillanceCode: number,
		unAuthAccessMessage: string,
		worker: W
	) => string;
}
