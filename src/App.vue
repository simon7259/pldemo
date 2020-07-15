<template>


    <div id="app">

        <img alt="Vue logo" src="./assets/OIP.jpg">

        <div class="container">

            <a-form class="fields" layout="inline">
                <a-form-item
                    label="Status"
                >
                    <a-input placeholder="input placeholder" />
                </a-form-item>
                <a-form-item
                    label="VMV"
                >
                    <a-input placeholder="input placeholder" />
                </a-form-item>
            </a-form>

            <div class="buttons">
                <a-button type="primary" class="button-item" @click="query">Query</a-button>
                <a-button type="primary" class="button-item" @click="actions">Action</a-button>
                <a-button type="primary" class="button-item" @click="cancel">Cencel</a-button>                
            </div>

            <a-table :columns="columns"
               :data-source="data"
               :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange, type: 'radio' }"
               :pagination=false
            >
                <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>

        </div>

        <a-modal v-model="actionVisible" title="Action Modal" @ok="handleAction" width="1000px" >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-modal>

        <a-modal v-model="cancelVisible" title="Cancel Modal" @ok="handleCancel" width="1000px" >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-modal>
        
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
             selectedRowKeys: [],
             loading: false,
             actionVisible: false,
             cancelVisible: false,
             columns,
             data
         }
     },
     mounted() {
         // this.fetch()
     },
     methods: {
         onSelectChange(selectedRowKeys) {
             console.log(">>>>>>>>>>> ", selectedRowKeys)
             this.selectedRowKeys = selectedRowKeys
         },
         fetch(params = {}) {
             console.log('params', params)
         },
         query() {
             console.log(">>>query")
         },
         actions() {
             this.actionVisible = true
         },
         cancel() {
             this.cancelVisible = true
         },
         handleAction(e) {
             console.log(e)
             setTimeout(() => {
                 this.actionVisible = false;
             }, 2000);
         },
         handleCancel(e) {
             console.log(e)
             setTimeout(() => {
                 this.cancelVisible = false;
             }, 2000);             
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
 .container {
     margin: 10px;
 }
 .buttons {
     margin: 10px;
     display: flex;     
 }
 .button-item {
     margin: 4px;
 }
 .fields {
     margin: 20px;
     display: flex;
 }
</style>
