export const validations = {
  mixed: {
    default: '{path} é inválido',
    required: 'Campo obrigatório',
    oneOf: 'Selecione uma das opções disponível',
    notOneOf: '{path} não deve ter nenhum dos seguintes valores: {values}',
    defined: '{path} não deve ser indefinido',
  },
  string: {
    length: 'Campo deve ter exatamente {{length}} caracteres',
    min: 'No mínimo {{count}} caracteres',
    max: 'No máximo {{count}} caracteres',
    matches: '{path} deve corresponder ao padrão: "{regex}"',
    email: 'E-mail inválido',
    url: 'URL inválida',
    trim: '{path} não deve conter espaços adicionais no início nem no fim',
    lowercase: '{path} deve estar em letras minúsculas',
    uppercase: '{path} deve estar em letras maiúsculas',
  },
  number: {
    min: 'O valor mínimo é {{count}}',
    max: 'O valor máximo é {{count}}',
    lessThan: 'O valor deve ser menor que {less}',
    moreThan: 'O valor deve ser maior que {more}',
    notEqual: '{path} não deve ser igual a {notEqual}',
    positive: 'O valor deve ser um número positivo',
    negative: 'O valor deve ser um número negativo',
    integer: 'O valor deve ser um número inteiro',
    safe: 'Oops! Parece que um número inserido ultrapassou o limite que podemos processar com segurança',
  },
  date: {
    min: 'A data deve ser posterior a {min}',
    max: 'A data deve ser anterior a {max}',
  },
  boolean: {},
  object: {
    noUnknown: '{path} tem chaves desconhecidas: {unknown}',
  },
  cep: {
    notFound: 'CEP não encontrado',
    invalid: 'CEP inválido',
  },
  cnpj: {
    invalid: 'CNPJ inválido',
  },
  cpf: {
    invalid: 'CPF inválido',
  },
} as const;
