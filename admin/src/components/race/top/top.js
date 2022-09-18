export default {
  name: 'Top',
  data() {
    return {
      page: 1,
      pageCount: 2,
      itemsPerPage: 10,
      headers: [
        {
          text: 'Avatar',
          value: 'avatar',
          align: 'center',
          sortable: false,
        },
        { text: 'UID', value: 'uid' },
        { text: 'Name', value: 'username' },
        { text: 'Balance', value: 'balance' },
        { text: 'Wagered', value: 'wagered' },
        { text: 'Profit', value: 'profit' },
        { text: 'Prize', value: 'prize' },
        { text: 'Rank', value: 'rank' },
        { text: 'Profile', value: 'profile', sortable: false },
      ],
      top: [
        {
          uid: 1234,
          username: 'Stacker',
          balance: 1337.87,
          wagered: 420,
          profit: 187,
          prize: 1000,
          rank: 1,
          avatar:
            'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/75/75e784f8399a328d59a5530117572ce733d6d8b7_full.jpg',
        },
        {
          uid: 69420,
          username: 'Madness',
          balance: 187,
          wagered: 220,
          profit: -187,
          prize: 500,
          rank: 2,
          avatar:
            'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/90/90c386491989e87cf62cbfa8543330570dfb7546_full.jpg',
        },
      ],
    }
  },
}
