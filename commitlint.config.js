module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 50],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'test', 'chore', 'perf', 'ci', 'build', 'style', 'revert', 'ops', 'refactor'],
    ],
    'scope-empty': [1, 'never'],
    'scope-enum': [
      2,
      'always',
      ['model', 'pipeline', 'endpoint', 'auth', 'data', 'compliance', 'deploy', 'ui', 'tests', 'docs', 'monitoring', 'ci'],
    ],
    'ticket-id': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'ticket-id': ({ header }) => {
          const ticketRegex = /\[[A-Z]+-[0-9]+\]/;
          return [
            ticketRegex.test(header),
            'Commit message must include a ticket ID in format [MIND-123]',
          ];
        },
      },
    },
  ],
};
