<template>


    <div id="app">

        <img alt="Vue logo" src="./assets/OIP.jpg">

        <div class="container">

            <a-form class="fields" layout="inline">
                <a-form-item
                        label="Status"
                >
                    <a-input placeholder="input placeholder"/>
                </a-form-item>
                <a-form-item
                        label="VMV"
                >
                    <a-input placeholder="input placeholder"/>
                </a-form-item>
            </a-form>

            <div class="buttons">
                <a-button type="primary" class="button-item" @click="query">Query</a-button>
                <a-button type="primary" class="button-item" @click="actions">Action</a-button>
                <a-button type="primary" class="button-item" @click="cancel">Cancel</a-button>
            </div>

            <a-table :columns="queryColumns"
                     :data-source="queryList"
                     :rowKey='record=>record.applicationId'
                     :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange, type: 'radio' }"
                     :pagination=true
            >
                <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
        </div>

        <!-- operation modal -->
        <a-modal  v-model="actionVisible" title="Action Modal" @ok="handleAction" width="1500px">
            <div class="operation-modal">
                <div class="operation">
                    <a-button style="margin:2px;" type="primary" @click="handleOperation(item.value)" v-for="item in operationVisible" :key="item.value">
                        {{ item.label }}
                    </a-button>
                </div>
                <div style="padding-left:10px;width:100%">
                    <a-table :columns="actionColumns" :data-source="actionModalData" key="actionTable">
                        <template slot="action" slot-scope="text, record" >
                            <!-- <button type="primary" @click="">Delete</button> -->
                            <a-dropdown>
                                <a-button type="primary" class="button-item">Actions <a-icon type="down" /></a-button>
                                <a-menu slot="overlay" >
                                    <a-menu-item key="reject">
                                        <a-button type="danger" @click="handleActionDelete(record)" class="button-item">reject</a-button>
                                    </a-menu-item>
                                    <a-menu-item key="cancel">
                                        <a-button type="danger" @click="handleActionDelete(record)" class="button-item">cancel</a-button>
                                    </a-menu-item>
                                </a-menu>
                            </a-dropdown>
                        </template>
                    </a-table>
                </div>
            </div>
        </a-modal>

        <!-- cancel modal -->
        <a-modal v-model="cancelVisible" title="Cancel Modal" @ok="handleCancel" width="1600px" dialogClass='cancel-dialog'>
            <div class="ant-row">
                <!-- <div class="ant-col-12">
                    <a-table :row-selection="rowSelection" :columns="cancelColumns" :data-source="selectedData"/>
                </div> -->
                <div style="padding-left:10px;width:100%;">
                    <a-table :columns="actionColumns" :data-source="actionModalData" key="cancelTable">
                        <template slot="action" slot-scope="text, record" >
                            <!-- <button type="primary" @click="">Delete</button> -->
                            <a-button type="danger" @click="handleActionDelete(record)" class="button-item">cancel</a-button>
                        </template>
                    </a-table>
                </div>
            </div>
        </a-modal>

        <a-modal v-model="payoffDialogVisible" title="PayOff Dialog" width="1200px">
            PayOff Date: <a-date-picker  />
            <a-table :columns="actionColumns" key="payOffTable">
                <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
        </a-modal>
        <a-modal v-model="payNoffDialogVisible" title="PayOff In N Dialog" width="1200px">
            Next Payroll Date: <a-date-picker  />
            PayOff In N: <a-input-number id="payNoffNumber" v-model="payNoff" :min="1" :max="10"  />

            <a-table :columns="actionColumns" key="payNoffTable">
                <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
        </a-modal>
        <a-modal v-model="payDownVisible" title="PayDown Dialog" width="1200px">
            Effective Date: <a-date-picker  />
            Pay Down Amount: <a-input-number
                                :default-value="1000"
                                :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                                 />
            <a-table :columns="actionColumns" key="payDownTable">
                <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
        </a-modal>

    </div>


</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import axios from "axios";
    import { operations, queryColumns, cancelColumns, actionColumns } from "./utils"

    const queryData = [{applicationId:1, applicationNo: 'AAAAA',}, {applicationId: 2, applicationNo: "BBBBB", }]
    const actionData = [{id: 1, changeType: 2, principal: 3}]
    
    export default {
        name: 'App',
        data() {
            return {
                selectedRowKeys: [],
                loading: false,
                actionVisible: false,
                cancelVisible: false,
                payoffDialogVisible: false,
                payNoffDialogVisible: false,
                payDownVisible: false,
                queryColumns,
                cancelColumns,
                actionColumns,
                queryList: queryData,
                actionModalData: actionData,
                selectedData: [],
                selectedRowKey: [],
                functionNameParam: null,
                scheduleId: null,
                paramJson: null,
                selectedRowId: 0,
                operations,
                payNoff: 0,
            }
        },        
        // mounted: {
        //     // this.fetch()
        // },
        computed: {
            operationVisible () {
                return this.operations.filter((item) => item.visible === true)
            },
        },
        methods: {
            onSelectChange(selectedRowKeys) {
                this.selectedRowKeys = selectedRowKeys
                this.selectedRowId = selectedRowKeys[0]
            },
            fetch(params = {}) {
                console.log('params', params)
            },
            query() {
                console.log(">>>query")
            },
            actions() {
                if(this.selectedRowKeys.length === 0) return;
                axios.get( 'http://localhost:8401/api/transaction-schedule-item/item/533245').then(response => {
                    this.actionModalData = response.data.data;
                }).catch(error => {
                    console.log(error);
                });
                this.actionVisible = true
            },
            cancel() {
                this.cancelVisible = true
            },
            handleAction(e) {
                console.log(e);
                setTimeout(() => {
                    this.actionVisible = false;
                }, 2000);
            },
            handleCancel(e) {
                console.log(e);
                setTimeout(() => {
                    this.cancelVisible = false;
                }, 2000);
            },
            handleChange(value) {
                this.functionNameParam = value;
            },
            handleOperation(operation) {                
                console.log(operation)
                if (operation === "101") {
                    this.payoffDialogVisible = true
                } else if (operation === "102") {
                    this.payNoffDialogVisible = true
                } else if (operation === "103") {
                    this.payDownVisible = true
                }
            },
            handleActionDelete(record) {
                console.log(record)
            },
        },
        created() {
            axios.get('http://localhost:8401/api/transaction-schedule/work-queue/1').then(response => {
                this.data = response.data.data;
            }).catch(error => {
                console.log(error);
            });
        }
    }


</script>
<style lang="scss">
    body {
        height: 0% !important;
    }
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
    .cancel-dialog {
        top: 40px !important;
    }
    .operation-modal {
        width: 100%;
        display: flex;
        .operation {
            display: flex;
            flex-direction: column;
        }
    }    
</style>