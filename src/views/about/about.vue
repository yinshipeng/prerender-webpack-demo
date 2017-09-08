<template>
    <div>
        <h2>About Page</h2>
        <button @click="getData">获取数据</button>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    import { getAbout } from '../../api/mock.service'
    export default {
        data(){
            return {
                msg: ''
            }
        },
        methods: {
            getData(){
                getAbout().then((res) => {
                    let n = parseInt(Math.random()*99)
                    this.msg = res.data[n].title
                })
            }
        },
        mounted(){
            this.getData()
        }
    }
</script>
