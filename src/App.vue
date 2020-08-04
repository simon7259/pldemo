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

            <a-table :columns="columns"
                     :data-source="data"
                     :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange, type: 'radio' }"
                     :pagination=true
            >
                <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
        </div>

        <a-modal v-model="actionVisible" title="Action Modal" @ok="handleAction" width="1200px">
            <div class="ant-row">
                <div class="ant-col-6" style="width: 410px">
                    <div>
                        <span style="padding-right: 80px">Function Name：</span>
                        <a-select style="width: 220px" @change="handleChange">
                            <a-select-option value="101">
                                Pay Off
                            </a-select-option>
                            <a-select-option value="102">
                                Pay Off In N Payments
                            </a-select-option>
                            <a-select-option value="103">
                                Pay Down
                            </a-select-option>
                            <a-select-option value="107">
                                Change Payment Mode
                            </a-select-option>
                            <a-select-option value="106">
                                Change Payment Frequency
                            </a-select-option>
                            <a-select-option value="105">
                                Change payroll Day
                            </a-select-option>
                            <a-select-option value="108">
                                Change Payday On Holiday
                            </a-select-option>
                            <a-select-option value="109">
                                Change Payday On Available
                            </a-select-option>
                            <a-select-option value="104">
                                Revoke ACH
                            </a-select-option>
                        </a-select>
                    </div>
                    <div>
                        <span style="padding-right: 15px">Single Payment Schedule Id:</span>
                        <a-input placeholder="Schedule Item Id" style="width: 220px" v-model="scheduleId"/>
                    </div>
                    <div>
                        <div>
                            <span style="padding-right: 63px;">Request Param Json:</span>
                        </div>
                        <div>
                            <a-textarea placeholder="Request Param Json" auto-size
                                        style="width: 410px; margin-top: 10px" v-model="paramJson"/>
                        </div>
                    </div>
                </div>
                <div class="ant-col-6" style="width: 700px;padding-left: 10px">
                    <a-table :columns="modalColumns" :data-source="modalData">
                    </a-table>
                </div>
            </div>
            <div class="ant-row" style="margin-top: 10px">
                <div class="ant-col-12" style="padding-right: 10px">
                    <a-button type="primary" block @click="getParams">
                        Action
                    </a-button>
                </div>
                <div class="ant-col-12">
                    <a-button type="primary" block>
                        Save
                    </a-button>
                </div>
            </div>
        </a-modal>

        <a-modal v-model="cancelVisible" title="Cancel Modal" @ok="handleCancel" width="1600px">
            <div class="ant-row">
                <div class="ant-col-12">
                    <a-table :row-selection="rowSelection" :columns="selectedColumns" :data-source="selectedData"/>
                </div>
                <div class="ant-col-12" style="padding-left: 10px">
                    <a-table :columns="modalColumns" :data-source="modalData">
                    </a-table>
                </div>
            </div>
            <div class="ant-row">
                <div class="ant-col-12">
                    <a-button type="primary" block>
                        Preview
                    </a-button>
                </div>
                <div class="ant-col-12" style="padding-left: 10px">
                    <a-button type="primary" block>
                        Save
                    </a-button>
                </div>
            </div>
        </a-modal>

    </div>


</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import {version} from "ant-design-vue";
    import moment from "moment";
    import axios from "axios";

    const selectedColumns = [
        {
            title: 'FunctionName',
            dataIndex: 'functionName'
        },
        {
            title: 'Created Time',
            dataIndex: 'createdTime'
        },
        {
            title: 'Created By',
            dataIndex: 'createdBy'
        },
        {
            title: 'Effective At',
            dataIndex: 'effectiveAt'
        },
        {
            title: 'Status',
            dataIndex: 'status'
        }
    ];
    const selectedData = [];
    for (let i = 0; i < 46; i++) {
        selectedData.push({
            key: i,
            functionName: 'Pay Off',
            createdBy: 'simon',
            createdTime: '2020-07-21',
            effectiveAt: '2020-07-21',
            status: '1'
        });
    }
    const modalColumns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Change Type',
            dataIndex: 'changeType',
            key: 'changeType'
        },
        {
            title: 'Transaction Date',
            dataIndex: 'transactionDate',
            key: 'transactionDate'
        },
        {
            title: 'Transaction Mode',
            dataIndex: 'transactionMode',
            key: 'transactionMode',
        },
        {
            title: 'Transaction Amount',
            dataIndex: 'transactionAmount',
            key: 'amount'
        },
        {
            title: 'Principal',
            dataIndex: 'principal',
            key: 'principal'
        },
        {
            title: 'Interest',
            dataIndex: 'interest',
            key: 'interest'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'transactionStatus'
        }
    ];
    const columns = [
        {
            title: 'Application Id',
            dataIndex: 'applicationId',
            key: 'applicationId',
            scopedSlots: {customRender: 'applicationId'},
            align: 'center'
        },
        {
            title: 'Application No',
            dataIndex: 'applicationNo',
            key: 'applicationNo',
            scopedSlots: {customRender: 'applicationNo'},
            align: 'center'
        },
        {
            title: 'Effective Date',
            dataIndex: 'effectiveDate',
            key: 'effectiveDate',
            align: 'center',
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
            ellipsis: true,
            align: 'center'
        },
        {
            title: 'Requested Principal',
            dataIndex: 'requestedPrincipal',
            key: 'requestedPrincipal',
            ellipsis: true,
            align: 'center'
        },
        {
            title: 'Interest Rate',
            dataIndex: 'interestRate',
            key: 'interestRate',
            ellipsis: true,
            align: 'center'
        },
        {
            title: 'Last Return Code',
            dataIndex: 'lastReturnCode',
            key: 'lastReturnCode',
            ellipsis: true,
            align: 'center'
        },
        {
            title: 'Last Return Date',
            dataIndex: 'lastReturnDate',
            key: 'lastReturnDate',
            ellipsis: true,
            align: 'center'
        },
        {
            title: 'Approved Person',
            dataIndex: 'approvedPerson',
            key: 'approvedPerson',
            ellipsis: true,
            align: 'center'
        }
    ];

    const data = [];
    const modalData = [];
    export default {
        name: 'App',
        data() {
            return {
                moment,
                version,
                selectedRowKeys: [],
                loading: false,
                actionVisible: false,
                cancelVisible: false,
                columns,
                data,
                modalColumns,
                modalData,
                selectedColumns,
                selectedData,
                selectedRowKey: [],
                functionNameParam: null,
                scheduleId: null,
                paramJson: null
            }
        },
        mounted: {
            // this.fetch()
        },
        computed: {
            rowSelection() {
                const {selectedRowKey} = this;
                return {
                    selectedRowKey,
                    onChange: this.onSelectChanges,
                    hideDefaultSelections: true,
                    selections: [
                        {
                            key: 'all-data',
                            text: 'Select All Data',
                            onSelect: () => {
                                this.selectedRowKey = [...Array(46).keys()];
                            },
                        },
                        {
                            key: 'odd',
                            text: 'Select Odd Row',
                            onSelect: changableRowKeys => {
                                let newSelectedRowKey = [];
                                newSelectedRowKey = changableRowKeys.filter((key, index) => {
                                    if (index % 2 !== 0) {
                                        return false;
                                    }
                                    return true;
                                });
                                this.selectedRowKey = newSelectedRowKey;
                            },
                        },
                        {
                            key: 'even',
                            text: 'Select Even Row',
                            onSelect: changableRowKeys => {
                                let newSelectedRowKey = [];
                                newSelectedRowKey = changableRowKeys.filter((key, index) => {
                                    if (index % 2 !== 0) {
                                        return true;
                                    }
                                    return false;
                                });
                                this.selectedRowKey = newSelectedRowKey;
                            },
                        },
                    ],
                    onSelection: this.onSelection,
                };
            },
        },
        methods: {
            onSelectChanges(selectedRowKey) {
                this.selectedRowKey = selectedRowKey;
            },
            onSelectChange(selectedRowKeys) {
                console.log(">>>>>>>>>>> ", selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys
            },
            fetch(params = {}) {
                console.log('params', params)
            },
            query() {
                console.log(">>>query")
            },
            actions() {
                axios.get( 'http://localhost:8401/api/transaction-schedule-item/item/533245').then(response => {
                    this.modalData = response.data.data;
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
            getParams() {
                console.log(this.functionNameParam);
                console.log(this.scheduleId);
                console.log(this.paramJson);
            }
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
