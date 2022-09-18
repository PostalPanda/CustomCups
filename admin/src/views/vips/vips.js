export default {
  name: 'Vips',
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
        { text: 'VIP Rank', value: 'vip.rank' },
        { text: 'Experience', value: 'xp.current' },
        { text: 'Date', value: 'date' },
        { text: 'Profile', value: 'profile', sortable: false },
      ],
      users: [
        {
          uid: 1234,
          username: 'Stacker',
          vip: {
            rank: 'Bronze',
            color: '#c06300',
          },
          xp: {
            current: 187,
            target: 420,
          },
          date: '9:30 AM UTC 30/3/2020',
          avatar:
            'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/75/75e784f8399a328d59a5530117572ce733d6d8b7_full.jpg',
        },
        {
          uid: 69420,
          username: 'Madness',
          vip: {
            rank: 'Bronze',
            color: '#c06300',
          },
          xp: {
            current: 187,
            target: 420,
          },
          date: '9:30 AM UTC 30/3/2020',
          avatar:
            'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/90/90c386491989e87cf62cbfa8543330570dfb7546_full.jpg',
        },
      ],
    }
  },
}
