import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

const categoriesRepository = CategoriesRepository.getInstance()
const importCategory = new ImportCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(importCategory)

export { importCategoryController }