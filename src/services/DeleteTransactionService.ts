import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError(' transaction does not exist ');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
