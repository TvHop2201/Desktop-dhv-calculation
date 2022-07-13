<template>
    <div class="contai">
        <div class="container row">
            <div class=" my-5">

                <div>
                    <div class="card-body text-center">
                        <i class="fa fa-search" aria-hidden="true" @click="getWeather()"></i>
                        <input type="text" class="input-seach mx-auto" placeholder="Tìm Kiếm" v-model="location"
                            @keyup.enter="getWeather()">
                        <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    </div>
                    <div class="card-body" v-if="!loading">
                        <div class="d-flex">
                            <h3 class="flex-grow-1">{{ city }}</h3>
                            <h4>{{ new Date().getHours() + ' : ' + new Date().getMinutes() }}</h4>
                        </div>

                        <div class="d-flex flex-column text-center mb-4">
                            <h6 class="display-4 mb-0 font-weight-bold"> {{ temp }}°C
                            </h6>
                            <div class="mt-3">
                                <img :src="`http://openweathermap.org/img/wn/${cloud.icon || '10d'}@4x.png`"
                                    width="100px">
                            </div>
                            <span class="small">{{ cloud.description || 'Nhiều Mây' }}</span>
                        </div>

                        <hr className='mx-5' />


                        <div class="d-flex align-items-center">
                            <div className='row m-5'>
                                <div className='col-6 flex-grow-1 item1'>
                                    <div>
                                        <p className='text-center'><i class="fas fa-sun fa-fw"></i> Mặt Trời Mọc : {{
                                                sunrise
                                        }}</p>
                                    </div>
                                    <div>
                                        <p className='text-center'><i class="fas fa-sun fa-fw"></i> Mặt Trời Lặn : {{
                                                sunset
                                        }}</p>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div>
                                        <p><i class=" fas fa-tint fa-fw"></i> Độ ẩm :
                                            {{ hum }}</p>
                                    </div>
                                    <div>
                                        <p><i class="fas fa-wind fa-fw"></i>Tốc độ gió :
                                            {{ wind }} km/h</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div v-if="loading" class="text-center">
                        <img src="../assets/image/loading.gif" class="mx-5" width="70px" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    data() {
        return ({
            Weather_key: 'b1ac492954c5e04bdb2ff86ca85b8de7',
            opencage_key: '99bd905cc7d0403380d7a0275ce7d2c5',
            kinhdo: 0,
            vido: 0,
            location: '',
            city: 'Vinh',
            temp: 22,
            cloud: {},
            sunrise: '',
            sunset: '',
            hum: '',
            wind: '',
            loading: false
        })
    },
    async created() {
        this.loading = true
        let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=vinh&appid=${this.Weather_key}&lang=vi&units=metric`)
        this.city = weatherData.data.name.toUpperCase()
        this.temp = weatherData.data.main.temp.toFixed()
        this.cloud = weatherData.data.weather[0]
        this.sunrise = moment.unix(weatherData.data.sys.sunrise).format('H:mm')
        this.sunset = moment.unix(weatherData.data.sys.sunset).format('H:mm')
        this.hum = weatherData.data.main.humidity + '%'
        this.wind = (weatherData.data.wind.speed * 3.6).toFixed(2)
        this.loading = false
    },
    methods: {
        async locationWeather() {
            const getLocation = (position) => {
                this.vido = position.coords.latitude
                this.kinhdo = position.coords.longitude
            }
            navigator.geolocation.getCurrentPosition(getLocation, (err) => alert(err.message))
            let data = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${this.vido}+${this.kinhdo}&key=${this.opencage_key}`)
            console.log(data.data)
        },
        async getWeather() {
            if (this.location === '') {
                alert('Mời Nhập Địa Chỉ !!!')
                return
            }
            this.loading = true
            let location = encodeURI(this.location)
            let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.Weather_key}&lang=vi&units=metric`)
            if (weatherData.status === 200) {
                this.city = weatherData.data.name.toUpperCase()
                this.temp = weatherData.data.main.temp.toFixed()
                this.cloud = weatherData.data.weather[0]
                this.sunrise = moment.unix(weatherData.data.sys.sunrise).format('H:mm')
                this.sunset = moment.unix(weatherData.data.sys.sunset).format('H:mm')
                this.hum = weatherData.data.main.humidity + '%'
                this.wind = (weatherData.data.wind.speed * 3.6).toFixed(2)
            } else {
                alert('Không Tìm Thấy Địa Chỉ Này !!!!')
            }
            this.loading = false
        }
    }

}
</script>

<style scoped>
.contai {
    background-image: url("../assets/image/weather.jpg");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    color: #ffffff;
}

.input-seach {
    border: 0;
    width: auto;
    padding-left: 2em;
    padding-right: 50%;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: #ffffff
}

.input-seach:focus {
    outline: none;
}


.input-seach:hover {
    border: 0;
}
</style>