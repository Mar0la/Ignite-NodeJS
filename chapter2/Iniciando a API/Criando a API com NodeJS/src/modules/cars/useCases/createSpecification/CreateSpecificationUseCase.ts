import { ISpecificationsRepository } from '../../repositories/ISpecificatiosRepository'

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository){}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name)

    if(specificationAlreadyExists){
      throw new Error('Specification already exist!')
    }

    this.specificationsRepository.create({name, description})
  }

}
export { CreateSpecificationUseCase }