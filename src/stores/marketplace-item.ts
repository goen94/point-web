import { defineStore } from 'pinia'

export interface IMarketplaceItem {
  _id: string
  name: string
  developer: string
  detail: string
  image: string
  price: number
}

export const useMarketplaceItem = defineStore('marketplace-item', {
  state: () => ({
    items: [
      {
        _id: '1',
        name: 'KPI',
        developer: 'John Doe',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 4000000,
        image: 'src/assets/images/no_image_available.jpg'
      },
      {
        _id: '2',
        name: 'KPI 1',
        developer: 'John Doe',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 4000000,
        image: 'src/assets/images/no_image_available.jpg'
      },
      {
        _id: '3',
        name: 'Checkin',
        developer: 'John Doe',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 4000000,
        image: 'src/assets/images/no_image_available.jpg'
      },
      {
        _id: '4',
        name: 'Checkin 1',
        developer: 'John Doe',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 4000000,
        image: 'src/assets/images/no_image_available.jpg'
      },
      {
        _id: '5',
        name: 'Absensi',
        developer: 'John Doe',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 4000000,
        image: 'src/assets/images/no_image_available.jpg'
      },
      {
        _id: '6',
        name: 'Absensi 1',
        developer: 'John Doe',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 4000000,
        image: 'src/assets/images/no_image_available.jpg'
      },
      {
        _id: '7',
        name: 'Playbook',
        developer: 'John Doe',
        detail:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        price: 4000000,
        image: 'src/assets/images/no_image_available.jpg'
      }
    ]
  }),
  actions: {
    getItems(limit: number) {
      const items = [...this.items]
      return items.splice(0, limit)
    },
    searchItems(key: string) {
      const items = [...this.items]
      return items.filter((item) => item.name.toLowerCase().includes(key.toLowerCase()))
    }
  }
})
