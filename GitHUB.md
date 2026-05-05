O Git é uma ferramenta de versionamento local que salva o estado de cada arquivo no momento do versionamento. Caso o arquivo não sofra alterações, ele cria um link simbólico para o arquivo que não foi editado.
Entre na sua conta do GitHub.
Clique na tecla Windows e digite cmd, que é um terminal de controle (Prompt de Comando).

Configuração
Depois, você deve configurar seu Git com seu nome e seu e-mail”No prompt de comando”

Github
Se você não tiver uma conta no GitHub, crie uma no site oficial.
GitHub

SSH - Gitbash
Em seguida, adicione uma nova chave com o comando:
ssh-keygen -t ed25519 -C "seu_email_pessoal"
Depois, você precisa inicializar o agente (o “robô”, que é a chave) com o comando:
eval "$(ssh-agent -s)"
Em seguida, adicione a chave ao agente:
ssh-add ~/.ssh/id_ed25519

SSH - Gitbash
Logo depois, copie a chave SSH com o comando:
clip < ~/.ssh/id_ed25519.pub
Depois, adicione a chave no GitHub.
Em seguida, crie um repositório, colocando um nome (obrigatório) e uma descrição (não obrigatória). Depois, deixe o repositório público e ative o README.

Testar conexão
ssh -T git@github.com
                      yes
