import { Request, Response } from 'express'
import { CreateSpecificationUseCase} from './CreateSpecificationUseCase'

class CreateSpecificationController {
  
  constructor(private createSoecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const {name, description} = request.body
   
    this.createSoecificationUseCase.execute({ name, description})
    return response.status(201).send()

  }
}

export { CreateSpecificationController }