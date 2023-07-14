/* 
quando clicar no pokémon da listagem temos q esconder o 
cartao aberto e mostrar o cartao correspondente ao 
que foi selecionado na listagem

pra isso vamo precisar trabalhar com dois elementos
 1- listagem
 2- cartão do pokemon

precisamos criar duas variaveis no JS para 
trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique 
feio pelo usuario na listagem de pokemons

- remover a classe aberto só do cartão quw 
está aberto 
- ao clicar em um pokemon da listagem pegamos 
o ID do pokemon pra saber qual cartão mostrar



*/
// precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
// vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem de pokemons

listaSelecaoPokemons.forEach(pokemon => {
    // precisamos criar duas variaveis no JS para trabalhar com os elementos da tela
    pokemon.addEventListener('click', () => {
    // - remover a classe aberto só do cartão que esta aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')
    

    // - ao clicar em um pokemon da listagem pegamos o ID do pokemon pra saber qual cartão mostrar
     const idPokemonSelecionado = pokemon.attributes.id.value

     const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado     
     const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
     cartaoPokemonParaAbrir.classList.add('aberto')

//- remover a classe ativa que marca o pokemon selecionado

    const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')

      //- adicionar a clase ativo no item da lista selecionado
      const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      PokemonSelecionadoNaListagem.classList.add('ativo')
    
    })

})
