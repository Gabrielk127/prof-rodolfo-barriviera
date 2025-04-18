"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container py-10 md:py-16 max-w-[1200px] mx-auto mt-24 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-sm hover:text-primary mb-6 text-[var(--primary-color)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>

            <div className="space-y-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Políticas de Privacidade
                </h1>
                <p className="text-muted-foreground">
                  ÚLTIMA ATUALIZAÇÃO: 13 DE AGOSTO DE 2020
                </p>
              </div>

              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p>
                  Esta política de privacidade (Política) descreve como Prof.
                  Dr. Rodolfo Barriviera (Empresa, nós e nosso) procede,
                  recolhe, usa e partilha informação pessoal quando usa este
                  website https://profrodolfobarriviera.com (O Site). Por favor
                  leia a informação abaixo cuidadosamente para que possa
                  entender as nossas práticas relativamente como lidamos com a
                  sua informação pessoal e como tratamos essa informação.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  FINALIDADE DO PROCESSAMENTO
                </h2>
                <h3 className="text-lg font-semibold mt-6 mb-3">
                  O que são dados pessoais?
                </h3>
                <p>
                  Nós recolhemos informação sobre si de várias formas, incluindo
                  dados pessoais. Como descrito nesta Política dados pessoais
                  conforme é definido no regulamento geral de proteção de dados,
                  incluí qualquer informação, que combinada com mais dados, ou
                  não que recolhemos sobre você identifica você como um
                  indivíduo, incluindo por exemplo o seu nome, código postal,
                  e-mail e telefone.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">
                  Porquê que precisamos desta informação pessoal?
                </h3>
                <p>
                  Somente processaremos os seus dados pessoais de acordo com as
                  leis de proteção de dados e privacidade aplicáveis. Precisamos
                  de certos dados pessoais para fornecer-lhe acesso ao site. Se
                  você se registrou conosco, terá sido solicitado que você
                  assinala para concordar em fornecer essas informações para
                  acessar aos nossos serviços, como comprar os nossos produtos
                  ou visualizar o nosso conteúdo. Este consentimento nos fornece
                  a base legal que exigimos sob a lei aplicável para processar
                  os seus dados. Você mantém o direito de retirar tal
                  consentimento a qualquer momento. Se você não concordar com o
                  uso dos seus dados pessoais de acordo com esta Política, por
                  favor, não use o nosso website.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  RECOLHENDO OS SEUS DADOS PESSOAIS
                </h2>
                <p>Nós recolhemos informações sobre das seguintes formas:</p>

                <h3 className="text-lg font-semibold mt-6 mb-3">
                  Informações que você nos dá, inclui:
                </h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    Os dados pessoais que você fornece quando se registra para
                    usar o nosso website, incluindo seu nome, morada, e-mail,
                    número de telefone, nome de usuário, senha e informações
                    demográficas;
                  </li>
                  <li>
                    Os dados pessoais que podem estar contidos em qualquer
                    comentário ou outra publicação que você no nosso website;
                  </li>
                  <li>
                    Os dados pessoais que você fornece no nosso programa de
                    afiliados ou em outras promoções que corremos no nosso
                    website;
                  </li>
                  <li>
                    Os dados pessoais que você fornece quando reporta um
                    problema no nosso website ou quando necessita de suporte ao
                    cliente;
                  </li>
                  <li>
                    Os dados pessoais que você fornece quando faz compras no
                    nosso website;
                  </li>
                  <li>
                    Os dados pessoais que você fornece quando nos contata por
                    telefone, e-mail ou de outra forma.
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-3">
                  Informações que recolhemos automaticamente
                </h3>
                <p>
                  Registramos automaticamente informações sobre si e o seu
                  computador, ou dispositivo móvel quando você acessa o nosso
                  website. Por exemplo, ao visitar o nosso website, registramos
                  o nome e a versão do seu computador, ou dispositivo móvel, o
                  fabricante e o modelo, o tipo de navegador, o idioma do
                  navegador, a resolução do monitor, o website visitado antes de
                  entrar no nosso website, as páginas visualizadas e por quanto
                  tempo você esteve em uma página, tempos de acesso e
                  informações sobre o seu uso e ações no nosso website.
                  Recolhemos informações sobre si usando cookies.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">COOKIES</h2>
                <h3 className="text-lg font-semibold mt-6 mb-3">
                  O que são cookies?
                </h3>
                <p>
                  Podemos recolher informação sua usando cookies. Cookies são
                  pequenos arquivos de dados armazenados no disco rígido do seu
                  computador, ou dispositivo móvel no seu browser. Podemos usar
                  tanto cookies (que expiram depois de fechar o browser) como
                  cookies sem data de expiração (que ficam no seu computador, ou
                  dispositivo móvel até que você os apague) para fornecer-lhe
                  uma experiência mais pessoal e interativa no nosso website.
                </p>
                <p>
                  Usamos dois tipos de cookies: Primeiramente cookies inseridos
                  por nós no seu computador, ou dispositivo móvel, que nós
                  utilizamos para reconhecer quando você voltar a visitar o
                  nosso website; e cookies de terceiros que são de serviços
                  prestados por terceiros no nosso website, e que podem ser
                  usados para reconhecer quando o seu computador, ou dispositivo
                  móvel visita o nosso e outros websites.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">
                  Cookies que utilizamos
                </h3>
                <p>
                  O nosso website utiliza os seguintes cookies descritos abaixo:
                </p>

                <h4 className="text-base font-medium mt-4 mb-2">
                  Cookies essenciais
                </h4>
                <p>
                  Estes cookies são necessários para fornecer os serviços
                  disponíveis no nosso website, para que você seja capaz de
                  utilizar algumas das suas funcionalidades. Por exemplo,
                  poderão permitir que você faça login na área de membro, ou que
                  carregue o conteúdo do nosso website rapidamente. Sem estes
                  cookies muitos dos serviços disponíveis no nosso website
                  poderão não funcionar corretamente, e só usamos estes cookies
                  para providenciar-lhe um bom serviço.
                </p>

                <h4 className="text-base font-medium mt-4 mb-2">
                  Cookies de funções
                </h4>
                <p>
                  Este cookie permite recordar as escolhas que você já fez no
                  nosso website, como por exemplo a língua, detalhes de login,
                  assim como outras escolhas que fez que possam ser
                  personalizadas por si. O propósito destes cookies é relembrar
                  todas as escolhas que você fez de formar a criar uma
                  experiência mais personalizada sem ter que inserir novamente
                  os seus dados no nosso website.
                </p>

                <h4 className="text-base font-medium mt-4 mb-2">
                  Cookies de análise e performance
                </h4>
                <p>
                  Estes cookies servem para recolher a informações sobre o
                  tráfego do nosso website e como os utilizadores utilização e
                  navegam no website. A informação recolhida não identifica em
                  particular nenhum utilizador. Inclui o número de visitantes no
                  nosso website, os websites que indicam o nosso website, as
                  páginas que os utilizadores visitam, os possíveis websites que
                  eles visitaram anteriormente e outras informações similares.
                  Nós utilizamos estas informações para melhorar e monitorar a
                  actividade do nosso website.
                </p>
                <p>
                  Nós utilizamos o Google Analytics com este propósito. Google
                  Analytics utiliza os seus próprio cookies. É somente utilizado
                  para melhorar a forma como o nosso website funciona. Poderá
                  saber mais informação sobre os cookies do Google Analytics
                  aqui:{" "}
                  <a
                    href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://developers.google.com/analytics/resources/concepts/gaConceptsCookies
                  </a>
                </p>
                <p>
                  Saiba mais como o Google protege os seus dados aqui:{" "}
                  <a
                    href="http://www.google.com/analytics/learn/privacy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://www.google.com/analytics/learn/privacy.html
                  </a>
                </p>
                <p>
                  Você pode evitar o uso deste cookie do Google Analytics no seu
                  browser ao instalar uma extensão no Google Chrome, poderá
                  baixar esta extensão aqui:{" "}
                  <a
                    href="http://tools.google.com/dlpage/gaoptout?hl=en-GB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://tools.google.com/dlpage/gaoptout?hl=en-GB
                  </a>
                </p>

                <h4 className="text-base font-medium mt-4 mb-2">
                  Cookies de publicidade
                </h4>
                <p>
                  Estes cookies analisam a forma como navega para podermos
                  mostrar-lhe anúncios que provavelmente serão do seu interesse.
                  Este cookies utilizam a informação do seu histórico de
                  navegação que com a sua permissão mostra-lhe anúncios
                  relevantes de terceiros, baseado nos seus interesses.
                </p>
                <p>
                  Você pode desabilitar cookies que guardam o histórico da sua
                  navegação, visitando o website{" "}
                  <a
                    href="http://www.youronlinechoices.com/uk/your-ad-choices"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://www.youronlinechoices.com/uk/your-ad-choices
                  </a>
                  . Se escolher remover este tipo de cookies, você verá na mesma
                  os anúncios, mas não serão relevantes segundo os seus
                  interesses.
                </p>

                <h4 className="text-base font-medium mt-4 mb-2">
                  Cookies de redes sociais
                </h4>
                <p>
                  Estes cookies são utilizados quando você partilha informação
                  nas redes sociais, ou de alguma forma tem acesso aos nossos
                  conteúdos através das redes sociais como o Facebook, Twitter,
                  ou Google+.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-3">
                  Desabilitando os cookies
                </h3>
                <p>
                  Você pode remover, ou rejeitar cookies através das
                  configurações do browser. Para fazer isso recomendamos que
                  siga as instruções dos seus browsers (normalmente pode
                  encontrar estas informações nas configurações do seu browser
                  em ajuda, ou ferramentas). Maior parte dos browsers aceitam os
                  cookies automaticamente até você alterar as configurações do
                  mesmo.
                </p>
                <p>
                  Se não aceitar os nossos cookies, a sua experiência no nosso
                  site não será tão agradável. Por exemplo nós poderemos não
                  reconhecer o seu computador, ou dispositivo móvel e você
                  poderá ter que fazer login sempre que entrar no nosso website.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">PUBLICIDADE</h2>
                <p>
                  Nós poderemos utilizar terceiros para apresentar anúncios
                  quando visita o nosso website. Estas empresas poderão recolher
                  informações como, tipo de browser, hora e dia, tipo de anúncio
                  foi clicado, neste e outros websites de forma a mostrar os
                  anúncios mais relevantes a você. Estas empresas normalmente
                  utilizam o seu sistema para recolher estes dados, que estão
                  sujeitos às suas políticas de privacidade.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  USANDO OS SEUS DADOS PESSOAIS
                </h2>
                <p>
                  Nós poderemos utilizar os seus dados pessoais da seguinte
                  forma:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    para manter e melhorar o nosso website, produtos e serviços;
                  </li>
                  <li>
                    para gerir a sua conta, incluindo comunicações que temos
                    consigo relativamente à sua conta, se tiver uma conta no
                    nosso website;
                  </li>
                  <li>
                    para operar e administrar o nosso programa de afiliados e
                    outras promoções que você poderá participar no nosso
                    website;
                  </li>
                  <li>
                    para responder aos seus comentários e perguntas e para
                    prestar apoio ao cliente;
                  </li>
                  <li>
                    para enviar informações, incluindo informação técnica,
                    actualizações, alertas de segurança e suporte;
                  </li>
                  <li>
                    com o seu consentimento, fazemos e-mail marketing sobre
                    promoções, e outras novidades, incluindo informação sobre os
                    nossos produtos, ou serviços oferecidos por nós, ou pelos
                    nossos afiliados. Você poderá deixar de receber estas
                    informações a qualquer momento, em todos os nossos e-mails
                    tem sempre uma opção de sair da lista. Mesmo que saia da
                    nossa lista poderemos enviar e-mails não relacionados com
                    marketing, incluem e-mails sobre alguma conta que tenha
                    conosco (se tiver uma), ou negócios que tenha conosco;
                  </li>
                  <li>
                    para processar pagamentos que tenha realizado no nosso
                    website;
                  </li>
                  <li>
                    quando acharmos necessário e apropriado (a) para cumprir com
                    a lei (b) para cumprir com pedidos e processo legais,
                    incluindo pedidos de autoridades públicas e governamentais;
                    (c) para cumprir a nossa Política; e (d) para proteger os
                    direitos, privacidade, segurança, seus e de outros.
                  </li>
                  <li>para analisar e estudar serviços;</li>
                  <li>
                    como descrito abaixo em Partilhar os seus dados pessoais.
                  </li>
                </ul>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  PARTILHAR OS SEUS DADOS PESSOAIS
                </h2>
                <p>
                  Podemos partilhar os seus dados pessoais das seguintes formas:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    A terceiros designados por você. Podemos partilhar os seus
                    dados com terceiros em que você tenha dado o seu
                    consentimento.
                  </li>
                  <li>
                    Serviços prestados por terceiros. Poderemos partilhar os
                    seus dados pessoais com terceiros que realizam alguns
                    serviços como (analise de dados, processamento de
                    pagamentos, suporte ao cliente, envio de e-mail marketing e
                    outros serviços similares).
                  </li>
                </ul>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  WEBSITE DE TERCEIROS
                </h2>
                <p>
                  O nosso website poderá conter links de terceiros. Esta
                  Política não cobre as Políticas de privacidade de terceiros.
                  Estes websites de terceiros tem as suas próprias políticas de
                  privacidade e não aceitamos qualquer responsabilidade sobre
                  esses websites, suas funções, ou políticas de privacidade. Por
                  favor leia as políticas de privacidade destes websites de
                  terceiros antes de submeter qualquer informação.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  CONTEÚDO GERADO PELO UTILIZADOR
                </h2>
                <p>
                  Poderá partilhar os seus dados pessoais conosco quando submete
                  e gera conteúdo no nosso website, incluí comentários no blog,
                  mensagens de suporte no nosso website. Por favor tenha noção
                  que qualquer informação que você publique no nosso website
                  torna-se de conhecimento público e ficará acessível a todos os
                  usuários do nosso website incluindo visitantes. Sugerimos que
                  tenha muito cuidado quando decidir tornar público os seus
                  dados pessoais, ou qualquer outra informação no nosso website.
                  Qualquer informação pessoal publicada no nosso website não
                  ficará privada ou confidencial.
                </p>
                <p>
                  Se você nos der alguma review, ou comentário, nós poderemos
                  tornar públicas essas informações no nosso website.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  TRANSFERÊNCIA DE DADOS INTERNACIONAL
                </h2>
                <p>
                  As suas informações incluindo dados pessoais que recolhemos de
                  você, poderão ser transferidos para, guardado em, e processado
                  por nós fora do país onde você reside, onde proteção de dados
                  e regulamentos de privacidade poderão não ter o mesmo nível de
                  proteção como em outros países. Ao aceitar esta política de
                  privacidade você concorda em transferir, guardar e processar
                  os seus dados. Nós iremos tomar todas as medidas necessárias
                  para assegurar que os seus dados são tratados da forma mais
                  segura e de acordo com as nossas políticas.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">SEGURANÇA</h2>
                <p>
                  Procuramos tomar sempre todas as medidas, técnicas e
                  administrativas para proteger todos os seus dados da forma
                  mais segura possível. Infelizmente nenhum sistema é 100%
                  seguro e poderá garantir completamente a segurança dos seus
                  dados. Se você pensa que os seus dados já não estão seguros
                  conosco (por exemplo o acesso à sua conta foi comprometido),
                  por favor entre em contato conosco imediatamente e relate-nos
                  o seu problema.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">RETENÇÃO</h2>
                <p>
                  Nós apenas guardaremos a sua informação pessoal durante 30
                  dias a não ser que um período mais longo seja necessário, ou
                  permitido por lei.
                </p>
                <p>OU</p>
                <p>
                  Nós apenas guardaremos a sua informação pessoal enquanto for
                  necessário e permitido por você para que você possa utilizar o
                  nosso website até que você feche a sua conta ou termine a sua
                  subscrição, a não ser que o período mais longo seja
                  necessário, ou permitido por lei.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  NOSSA POLÍTICA COM CRIANÇAS
                </h2>
                <p>
                  O nosso website não é direcionado para crianças abaixo dos 18
                  anos. Se um pai, ou um encarregado de educação verificar que o
                  seu, ou a sua filha forneceu dados pessoais no nosso website
                  sem o seu consentimento, deverá contatar-nos imediatamente.
                  Nós iremos apagar todos esses dados o mais rápido possível.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  OS SEUS DIREITOS
                </h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>
                    <strong>Sair da lista.</strong> Você pode contactar-nos a
                    qualquer momento para sair da nossa lista; (i) comunicações
                    de e-mail marketing (ii) a nossa recolha de dados pessoais
                    sensíveis (iii) qualquer novo processamento de dados
                    pessoais que poderemos realizar.
                  </li>
                  <li>
                    <strong>Acesso.</strong> Você poderá ter acesso às
                    informações que nós possuímos de você a qualquer momento ao
                    contatar-nos.
                  </li>
                  <li>
                    <strong>Alterar.</strong> Você também poderá contatar-nos
                    para atualizar ou corrigir qualquer informação pessoal que
                    tenhamos sua.
                  </li>
                  <li>
                    <strong>Mover.</strong> A sua informação pessoal pode ser
                    transferida. Você tem a flexibilidade de mover os seus dados
                    para outro serviço se assim desejar.
                  </li>
                  <li>
                    <strong>Apagar.</strong> Em algumas situações, por exemplo
                    quando a informação que temos sobre si já não é relevante,
                    ou é incorreta, você poderá pedir para apagarmos os seus
                    dados.
                  </li>
                </ul>
                <p>
                  Se você quiser exercer qualquer um deste direitos por favor
                  contate-nos. Por favor deixe bem claro no seu pedido (i) que
                  informação quer; e (ii) quais dos direitos acima você quer
                  usar. Para a sua proteção apenas poderemos completar os seus
                  pedidos, se estes forem feitos com o mesmo e-mail associado
                  aos seus dados, iremos verificar a identidade antes de efetuar
                  qualquer alteração. Nós iremos atender ao seu pedido o mais
                  breve possível, não mais que 30 dias. Por favor tenha atenção
                  que eventualmente poderemos ter que guardar alguma informação
                  para mantermos em registro.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">QUEIXAS</h2>
                <p>
                  Nós estamos empenhados em resolver qualquer queixa sobre a
                  forma como recolhemos os seus dados pessoais. Se tiver alguma
                  queixa que queira fazer sobre a nossa política de privacidade,
                  ou as nossas praticas relacionadas com os seus dados pessoais,
                  por favor contate-nos em:{" "}
                  <a
                    href="mailto:rdbarriviera@gmail.com"
                    className="text-primary hover:underline"
                  >
                    rdbarriviera@gmail.com
                  </a>
                  . Nós iremos responder ao seu contato o mais rápido possível,
                  no máximo de 30 dias. Nós esperamos resolver qualquer situação
                  que seja trazida até nós por você, em todo o caso se
                  verificarmos que a sua queixa não é aplicável, você está no
                  seu direito de contatar a autoridade local de proteção de
                  dados.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  INFORMAÇÃO DE CONTATO
                </h2>
                <p>
                  Nós agradecemos os seus comentários e questões que tenha sobre
                  a nossa política de privacidade. Poderá contatar-nos por
                  e-mail em{" "}
                  <a
                    href="mailto:rdbarriviera@gmail.com"
                    className="text-primary hover:underline"
                  >
                    rdbarriviera@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Button
              asChild
              className="bg-[var(--primary-color)] text-[var(--button-foreground)] hover-button"
            >
              <Link href="/">Voltar para a página inicial</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
