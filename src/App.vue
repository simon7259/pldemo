<template>


    <div id="app">
        <img alt="Vue logo" src="./assets/OIP.jpg">

        <a-table :columns="columns"
               :data-source="data"
               :pagination=false
        >
            <a slot="name" slot-scope="text">{{ text }}</a>
        </a-table>
    </div>


    
</template>

<script>
 //import HelloWorld from './components/HelloWorld.vue'
 const columns = [
     {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
         scopedSlots: { customRender: 'name' },
     },
     {
         title: 'Age',
         dataIndex: 'age',
         key: 'age',
         width: 80,
     },
     {
         title: 'Address',
         dataIndex: 'address',
         key: 'address 1',
         ellipsis: true,
     },
     {
         title: 'Long Column Long Column Long Column',
         dataIndex: 'address',
         key: 'address 2',
         ellipsis: true,
     },
     {
         title: 'Long Column Long Column',
         dataIndex: 'address',
         key: 'address 3',
         ellipsis: true,
     },
     {
         title: 'Long Column',
         dataIndex: 'address',
         key: 'address 4',
         ellipsis: true,
     },
 ];


 const data = [
     {
         key: '1',
         name: 'John Brown',
         age: 32,
         address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
         tags: ['nice', 'developer'],
     },
     {
         key: '2',
         name: 'Jim Green',
         age: 42,
         address: 'London No. 2 Lake Park, London No. 2 Lake Park',
         tags: ['loser'],
     },
     {
         key: '3',
         name: 'Joe Black',
         age: 32,
         address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
         tags: ['cool', 'teacher'],
     },
 ];
 export default {
     name: 'App',
     data () {
         return {
             loading: false,
             columns,
             data
         }
     },
     mounted() {
         // this.fetch()
     },
     methods: {
         fetch(params = {}) {
             console.log('params', params)
         }
     }
 }

 
 
</script>

<style>
 #app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 40px;
 }
 img {
     height: 120px;
 }
</style>
