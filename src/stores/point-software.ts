import { defineStore } from 'pinia'

const softwares = [
  {
    title: 'Key Performance Indicator',
    subTitle: 'Pastikan biaya gaji anda dibayarkan untuk orang yang tepat!',
    detail:
      'Hargai individu sesuai dengan prestasinya dengan Software KPI kami. Laporan kinerja karyawan dapat dibuat dengan cepat dan tepat. Lacak kemajuan dan kualitas tim anda dengan akurat.',
  },
  {
    title: 'Checkin',
    subTitle: '',
    detail:
      '',
  },
  {
    title: 'Absensi',
    subTitle: 'Absensi praktis tanpa ribet memasang alat!',
    detail:
      'Software Absensi terkini bagi pekerja kantor maupun pekerja remote. Teknologi geolokasi Point memastikan identifikasi karyawan secara akurat, dan meminimalkan praktik absensi palsu.',
  },
  {
    title: 'Playbook',
    subTitle: 'Prosedur kerja yang terstruktur terbukti meminimalisir konflik kerja!',
    detail:
      'Software Playbook kami mengorganisir alur kerja dan prosedur perusahaan ke dalam pola yang mudah diakses, memudahkan tim Anda untuk membuat keputusan dengan efektif.',
  },
  {
    title: 'Sales Visitation',
    subTitle: 'Temukan potensi penjualan tanpa batas dengan software sales visitation kami.',
    detail:
      'Dengan software geolokasi canggih, identifikasi prospek terbaik dengan akurasi tinggi. Tampilkan data pelanggan potensial berdasarkan lokasi, sehingga Anda dapat menyusun strategi penjualan yang tepat sasaran. Dengan data kami, analisa dapat dilakukan untuk memahami tren pasar dan menemukan peluang bisnis baru. Kluster prospek potensial dan pelanggan terbaik dapat terpetakan, sehingga mengoptimalkan rute penjualan.',
  },
  {
    title: 'Enterprise Resource Planing',
    subTitle: 'Kelola bisnis anda tanpa rasa khawatir dengan Point ERP.',
    detail:
      'Tidak perlu menjadi master akunting untuk jadi pengusaha sukses! Dengan PointERP, Anda bisa fokus ke strategi bisnis dan hal-hal kreatif tanpa memusingkan ribetnya akunting!',
  },
]

export interface IPointSoftware {
  title: string
  subTitle: string
  detail: string
  images: string[]
  link: string
}

export const usePointSoftware = defineStore('point-software', {
  state: () => ({
    active: '',
    activeIndex: 0,
    softwares,
    detail: {
      title: 'Key Performance Indicator',
      subTitle: 'Monitoring Kinerja Karywan dan Target Bisnis Jadi Lebih Mudah!',
      detail:
        'Pantau performa karyawan dalam mencapai target secara transparan dan detail. Bukti pekerjaan dan laporan dapat terpantau lebih mudah dengan point KPI. Dilengkapi dengan fitur feedback untuk peningkatan dan perbaikan kinerja',
      images: [
        '/assets/no_image_available.jpg',
        '/assets/no_image_available.jpg',
        '/assets/no_image_available.jpg'
      ],
      link: '/marketplace'
    }
  }),
  actions: {
    getSoftwares() {
      return this.softwares
    },
    getSelectedSoftware(){
      return { 
        ...this.softwares[this.activeIndex],
        images: [
          '/assets/no_image_available.jpg',
          '/assets/no_image_available.jpg',
          '/assets/no_image_available.jpg'
        ],
        link: '/marketplace'
      };
    },
    setSelected(index: number) {
      const newDetail = this.softwares[index];
      this.detail = {
        ...this.detail,
        ...newDetail,
      }
      this.activeIndex = index;
      return this.detail
    }
  }
})
