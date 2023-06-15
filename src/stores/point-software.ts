import { defineStore } from 'pinia'

const softwares = [
    'Key Performance Indicator',
    'Checkin',
    'Absensi',
    'Playbook',
    'Sales Visitation',
    'Enterprise Resource Planing'
  ]

export interface IPointSoftware {
    title: string,
    subTitle: string,
    detail: string,
    images: string[],
    link: string
}

export const usePointSoftware = defineStore('point-software', {
  state: () => ({
    active: '',
    softwares,
    detail: {
        title: 'Key Performance Indicator',
        subTitle: 'Monitoring Kinerja Karywan dan Target Bisnis Jadi Lebih Mudah!',
        detail: 'Pantau performa karyawan dalam mencapai target secara transparan dan detail. Bukti pekerjaan dan laporan dapat terpantau lebih mudah dengan point KPI. Dilengkapi dengan fitur feedback untuk peningkatan dan perbaikan kinerja',
        images: ['/assets/No_Image_Available.jpg', '/assets/No_Image_Available.jpg', '/assets/No_Image_Available.jpg'],
        link: '/marketplace',
    },
  }),
  actions: {
    getSoftwares() {
        return this.softwares
    },
    setSelected(title: string) {
        this.detail = {
            title,
            subTitle: this.detail.subTitle,
            detail: this.detail.detail,
            images: this.detail.images,
            link: this.detail.link
        }
        return this.detail
    }
  },
})
