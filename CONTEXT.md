# Projeto: Landing Page Psicanálise - Conversão de Alta Performance

## Project Summary
Landing Page para psicólogo/psicanalista focada em conversão via WhatsApp. O design deve ser "Clean", minimalista, utilizando tipografia serifada para autoridade e sans-serif para legibilidade. Inspirado no estilo estético de Ana Suy.

## Functional Scope
- Hero Section: Acolhimento e CTA imediato.
- [cite_start]Seção Bio/Formação: Exposição de títulos acadêmicos (UEL, PUC, UEM).
- [cite_start]Seção Método: Explicação do porquê a psicanálise[cite: 13].
- [cite_start]Cards de Serviço: Psicoterapia Convencional vs Breve.
- [cite_start]Passo a Passo: Fluxo de atendimento (1, 2, 3)[cite: 24, 26, 28].
- Floating WhatsApp Button: Fixo em todas as seções.
- [cite_start]Blog/Redes Sociais: Links externos no rodapé.

## Tech Stack
- Framework: Astro 4.x
- Styling: Tailwind CSS
- Icons: Lucide React
- Animations: Framer Motion (fade-ins suaves ao scroll)
- Fontes sugeridas: Playfair Display (Headings), Inter (Body)

## Data Model (Content)
Baseado inteiramente no arquivo layout.pdf.
- Entidade 'Tratamento': {tipo: string, sessões: string, descrição: text}
- Entidade 'Passos': {numero: int, titulo: string, descrição: text}

## Golden Rules
- Mobile First: A maioria dos acessos virá de redes sociais (Instagram).
- Performance: Imagens devem estar em formato WebP com lazy loading.
- Acessibilidade: Contraste adequado nos tons terrosos/bege.
- Semântica: Uso correto de H1, H2 e H3 para SEO local.