<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor v-for="(floor) in getFloorList" :key="floor.id" :list="floor"/>
        <Brand/>
    </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Like from '@/pages/Home/Like'
import Rank from '@/pages/Home/Rank'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'

    export default {
        name:'',
        components:{
            ListContainer,
            Recommend,
            Rank,
            Like,
            Floor,
            Brand
        },
        mounted(){
            this.$store.dispatch('getFloorList')
            this.$store.dispatch('userInfo')
        },
        computed:{
            ...mapState({
                getFloorList:state => state.home.getFloorList
            })
        }
    }
</script>

<style>

</style>