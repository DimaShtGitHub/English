'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('InsertLetters', [{
      topicId: 4,
      wordId: 1,
      text: 'Or_nge',
      letter: 'a',
      option: 'aoe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 3,
      text: 'Ban_na',
      letter: 'a',
      option: 'aoe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 5,
      text: 'Chees_',
      letter: 'e',
      option: 'yoe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 7,
      text: 'Hamb_rger',
      letter: 'u',
      option: 'uoe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 4,
      text: 'F_sh',
      letter: 'i',
      option: 'aie',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 21,
      text: 'F_x',
      letter: 'o',
      option: 'oae',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 22,
      text: 'Ra_bit',
      letter: 'b',
      option: 'bcd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 23,
      text: 'D_g',
      letter: 'o',
      option: 'ouy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 47,
      text: 'O_e',
      letter: 'n',
      option: 'mnl',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 49,
      text: 'Th_ee',
      letter: 'r',
      option: 'trk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 54,
      text: 'Se_en',
      letter: 'v',
      option: 'hvp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 57,
      text: 'Z_ro',
      letter: 'e',
      option: 'oeu',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 81,
      text: 'Cook_e',
      letter: 'i',
      option: 'uoi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 40,
      text: 'T_ger',
      letter: 'i',
      option: 'iey',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 25,
      text: 'Eleph_nt',
      letter: 'a',
      option: 'oae',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 35,
      text: 'Ca_',
      letter: 'r',
      option: 'brd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 2,
      wordId: 63,
      text: 'Fr_g',
      letter: 'o',
      option: 'ouy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 55,
      text: 'Ei_ht',
      letter: 'g',
      option: 'hgt',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 36,
      text: 'T_ain',
      letter: 'r',
      option: 'tpr',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 33,
      text: 'Water_elon',
      letter: 'm',
      option: 'mvp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 37,
      text: 'Tom_to',
      letter: 'a',
      option: 'oea',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 79,
      text: 'Ju_ce',
      letter: 'i',
      option: 'uoi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 53,
      text: 'Br_ad',
      letter: 'e',
      option: 'iey',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 73,
      text: 'Pot_to',
      letter: 'a',
      option: 'oae',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 65,
      text: 'Ai_plane',
      letter: 'r',
      option: 'brd',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 74,
      text: 'Oni_n',
      letter: 'o',
      option: 'ouy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 11,
      text: 'Ki_i',
      letter: 'w',
      option: 'vhw',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 6,
      wordId: 34,
      text: 'B_s',
      letter: 'u',
      option: 'oua',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 19,
      text: 'App_e',
      letter: 'l',
      option: 'mlp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 8,
      text: 'C_rrot',
      letter: 'a',
      option: 'oea',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 4,
      wordId: 2,
      text: 'Lem_n',
      letter: 'o',
      option: 'ouy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 6,
      text: 'E_g',
      letter: 'g',
      option: 'lgp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 10,
      text: 'B_tter',
      letter: 'u',
      option: 'oau',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 1,
      wordId: 12,
      text: 'Ca_e',
      letter: 'k',
      option: 'ckr',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 5,
      wordId: 14,
      text: 'Cuc_mber',
      letter: 'u',
      option: 'uea',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 48,
      text: 'T_o',
      letter: 'w',
      option: 'vwr',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 50,
      text: 'Fou_',
      letter: 'r',
      option: 'trk',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 56,
      text: 'Ni_e',
      letter: 'n',
      option: 'nvp',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 3,
      wordId: 52,
      text: 'Si_',
      letter: 'x',
      option: 'yxi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 16,
      text: 'Flo_ers',
      letter: 'w',
      option: 'vwz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 62,
      text: 'B_d',
      letter: 'e',
      option: 'eau',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      topicId: 7,
      wordId: 64,
      text: 'Ta_le',
      letter: 'b',
      option: 'dbc',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 67,
      text: 'Com_uter',
      letter: 'p',
      option: 'ptm',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 84,
      text: 'Mirr_r',
      letter: 'o',
      option: 'ueo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 90,
      text: 'So_a',
      letter: 'f',
      option: 'vfw',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 91,
      text: 'Cl_ck',
      letter: 'o',
      option: 'oue',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      topicId: 7,
      wordId: 92,
      text: 'L_mp',
      letter: 'a',
      option: 'eua',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InsertLetters', null, {});

  }
};
