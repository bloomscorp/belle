import {BehemothControllerWorker} from "../worker/behemoth-controller-worker.js";
import {RaintreeResponse} from "../../raintree/raintree-response.js";
import {NverseValidator} from "../../nverse/validator/nverse-validator.js";
import {NverseSanitizer} from "../../nverse/sanitizer/nverse-sanitizer.js";

export interface PostEntityController {

	postEntity: <E, W extends BehemothControllerWorker<number>>(
		requset: any,
		methodName: string,
		surveillanceCode: number,
		unAuthPostMessage: string,
		successLogMessage: string,
		validator: NverseValidator<E>,
		sanitizer: NverseSanitizer<E, E>,
		entity: E,
		worker: W
	) => RaintreeResponse,
	
	postEntityUnauthorized: <E, W extends BehemothControllerWorker<number>>(
		requset: any,
		methodName: string,
		successLogMessage: string,
		validator: NverseValidator<E>,
		sanitizer: NverseSanitizer<E, E>,
		entity: E,
		worker: W
	) => RaintreeResponse
}
