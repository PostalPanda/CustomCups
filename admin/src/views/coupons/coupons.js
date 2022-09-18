export default {
  name: 'Coupons',
  store: ['actions'],
  data() {
    return {
      create: {
        name: '',
        message: '',
        reward: null,
        uses: null,
        minLevel: null,
      },
      loading: true,
      search: null,
      page: 1,
      pageCount: 2,
      itemsPerPage: 10,
      headers: [
        { text: 'ID', value: '_id' },
        { text: 'Coupon Name', value: 'code' },
        { text: 'Message', value: 'message' },
        { text: 'Usage Reward', value: 'payout' },
        { text: 'Active', value: 'active' },
        { text: 'Uses Max', value: 'uses' },
        { text: 'Uses Left', value: 'claimedUsers' },
        {
          text: 'Time',
          value: 'created',
        },
      ],
      coupons: [],
    }
  },
  watch: {
    'create.reward'() {
      if (this.create.reward.length === 0) return
      this.create.reward = parseFloat(this.create.reward)
    },
    'create.uses'() {
      if (this.create.uses.length === 0) return
      this.create.uses = parseInt(this.create.uses)
    },
    'create.minLevel'() {
      if (this.create.minLevel.length === 0) return
      this.create.minLevel = parseInt(this.create.minLevel)
    },
  },
  methods: {
    getDataFromApi() {
      this.loading = true
      return new Promise((resolve) => {
        this.actions.coupons
          .list()
          .then((resp) => resolve(resp.data))
          .catch((err) => {
            this.$noty.error(err)
          })
          .finally(() => {
            this.loading = false
          })
      })
    },
    refresh() {
      if (this.loading) return
      this.getDataFromApi().then((data) => {
        this.coupons = data
      })
    },
    addCoupon() {
      this.actions.coupon
        .add({
          code: this.create.name,
          uses: this.uses,
          message: this.create.message,
          payout: this.reward,
          minLevel: this.minLevel,
        })
        .then((resp) => {
          if (resp.status === 200) {
            this.$noty.success('Successfully created')
            this.create = {
              name: '',
              message: '',
              reward: null,
              uses: null,
              minLevel: null,
            }
            this.getDataFromApi().then((data) => {
              this.coupons = data
            })
          }
        })
        .catch((err) => {
          this.$noty.error(err)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  beforeMount() {
    this.getDataFromApi().then((data) => {
      this.coupons = data
    })
  },
  computed: {
    filteredCoupons() {
      if (!this.search) return this.coupons
      return this.coupons.filter(
        (x) => x._id == this.search || x.code.toLowerCase().includes(this.search.toLowerCase())
      )
    },
    reward() {
      return this.create.reward > 0 ? parseFloat(this.create.reward) : 0
    },
    uses() {
      return this.create.uses > 0 ? parseFloat(this.create.uses) : 0
    },
    minLevel() {
      return this.create.minLevel > 0 ? parseFloat(this.create.minLevel) : 0
    },
    invalid() {
      return this.create.name.length === 0 || this.reward <= 0 || this.uses <= 0 || this.minLevel <= 0
    },
  },
}
