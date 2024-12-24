export const shared = {
  forbidden: {
    subtitle: 'Erro 403',
    title: 'Acesso Negado',
    description:
      'Você não tem permissão para acessar esta página. Verifique suas credenciais ou retorne para a página inicial.',
    buttons: {
      back: 'Voltar ao início',
      support: 'Reportar problema',
    },
  },
  notFound: {
    subtitle: 'Erro 404',
    title: 'Ops! Algo deu errado',
    description:
      'Não foi possível encontrar a página que você está procurando. Verifique o endereço ou retorne para a página inicial.',
    buttons: {
      back: 'Voltar ao início',
      support: 'Reportar problema',
    },
  },
  pageError: {
    subtitle: 'Erro inesperado',
    title: 'Algo deu errado',
    description:
      'Desculpe, ocorreu um erro inesperado. Por favor, tente novamente ou retorne à página inicial. Se o problema persistir, entre em contato com o suporte.',
    buttons: {
      back: 'Voltar ao início',
      support: 'Reportar problema',
    },
  },
  pageLoading: {
    message: 'Carregando conteúdo...',
  },
  pageWelcome: {
    title: 'É hora de expandir o conhecimento e construir um futuro incrível.',
    subtitle: 'Boas-vindas!',
  },
} as const;
