import { BaseService } from '../base/base.service';

export class DogService extends BaseService {
    constructor(props) {
        super("https://dog.ceo/api/")
    }

    getRandomImage() {
        return super.get("breeds/image/random")
    }

    getRandomImage10() {
        return super.get("breeds/image/random/10")
    }
}