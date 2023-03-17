function chooseSpeedOption(speedOption) {
  switch (speedOption.toLowerCase()) {
    case 'lento':
      return goDownStairsSlow();
    case 'seguro':
      return goDownStairsSafely();
    case 'rapido':
      return goDownStairsFast();
    case 'volando':
      return flyDownStairs();
  }
}

function goDownStairsSlow(time = 2000) {
  let instructions = [
    'Estira tu pierna izquierda',
    'Flexiona tu pierna derecha levemente',
    'Cuando sientas el siguiente escalon asienta tu pie en él',
    'Apoya tu peso en tu pierna izquierda',
    'Baja tu pierna derecha al mismo escalón',
    'Estira tu pierna derecha',
    'Flexiona tu pierna izquierda levemente',
    'Cuando sientas el siguiente escalon asienta tu pie en él',
    'Apoya tu peso en tu pierna izquierda',
    'Baja tu pierna izquierda al mismo escalón',
  ];

  printInstructions(instructions, time);

  setTimeout(() => {
    goDownStairsSafely();
  }, instructions.length * time + time / 3);
}

function goDownStairsSafely(time = 3000) {
  let instructions = [
    'Mira a tu derecha',
    'Abraza el barandal que ves con todas tus fuerzas',
    'Mentalizate a que puedes caerte y rodar hasta el fondo',
    'Estira tu pierna izquierda mientras tiemblas por el panico a resbalar',
    'Flexiona tu pierna derecha levemente, mientras sientes que cambia el balance \ny no deja de palpitar tu corazon',
    'Cuando sientas el siguiente escalon asienta tu pie en él, este paso es el más importante',
    'Asegurate que esta tu pie en el centro de la base, no quieres caer',
    'Apoya tu peso en tu pierna izquierda',
    'Estas seguro que si apoyaste tu peso en la pierna izquierda?',
    'Si estas en el centro de el escalón?',
    'Mejor volvamos a empezar',
  ];

  printInstructions(instructions, time);

  setTimeout(() => {
    goDownStairsSafely();
  }, instructions.length * time + time / 3);
}

function goDownStairsFast(time = 1000) {
  let instructions = [
    'Baja tu pie izquierdo al siguiente escalon',
    'Apoya tu pie y peso en ese escalon',
    'Baja tu pie derecho al siguiente escalon',
    'Apoya tu pie y peso en ese escalon',
  ];

  printInstructions(instructions, time);

  setTimeout(() => {
    goDownStairsFast();
  }, instructions.length * time + time / 3);
  jumpStairs();
}

function flyDownStairs(time = 1000) {
  let instructions = [
    'Baja un escalon',
    'Baja otro escalon',
    'Baja dos escalones',
    'Baja tres escalones',
    'Ya vas muy rápido', 
    'Baja cuatro escalones',
    'Resbalas'
  ];

  printInstructions(instructions, time);

  setTimeout(() => {
    fallingStairs();
  }, instructions.length * time);
}

function fallingStairs(time=300) {
    let instructions = [
      'Rueda un escalon abajo',
      'Intenta detenerte',
      'Rueda otro escalon abajo',
      'Rueda un escalon abajo',
      'Intenta detenerte',
      'Rueda otro escalon abajo',
      'Rueda un escalon abajo',
      'Intenta detenerte',
      'Rueda otro escalon abajo',
      'Te levantas',
      'Baja al siguiente escalon',
      'Resbalas'
    ];
  
    printInstructions(instructions, time);
  
    setTimeout(() => {
        fallingStairs();
    }, instructions.length * time + time / 3);
    
}

function jumpStairs() {
  let max = 14;
  let min = 6;
  console.log('Salta 2 escalones porque te sentiste Spider-man');
  setTimeout(() => {
    jumpStairs();
  }, 1000 * (Math.floor(Math.random() * (max - min + 1)) + min));
}

function printInstructions(instructions, time = 1500) {
  instructions.forEach((instruction, i) => {
    setTimeout(() => {
      console.log(instruction);
    }, i * time);
  });
}
