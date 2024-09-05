class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      
      if (this.tipo === 'mago') {
        ataque = 'usou magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'usou espada';
      } else if (this.tipo === 'monge') {
        ataque = 'usou artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'usou shuriken';
      } else {
        ataque = 'realizou um ataque desconhecido';
      }
      
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  const heroi1 = new Heroi('Siechi', 18, 'mago');
  heroi1.atacar(); // Saída: O guerreiro atacou usando espada
  
  const heroi2 = new Heroi('Nitsoo', 18, 'guerreiro');
  heroi2.atacar(); // Saída: O mago atacou usando magia
  