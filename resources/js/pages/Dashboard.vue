    <template>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card card-default">
                        <div class="card-header">Add Task</div>
                        <div class="card-body">
                            <input v-model="task" class="form-control" v-on:keyup.enter="submit">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">All Tasks</div>
                        <div class="card-body">
                            <li style="list-style: none" v-for="(task, id) in tasks" :key="id">{{task.task}}</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <script>
        export default {
            data (){
                return {
                    task: null,
                    tasks: null
                }
            },
            methods:{
                submit(){
                    axios.post('api/add-task', {
                        task: this.task,
                    })
                    .then(response => {
                        this.task = null
                    })
                    .catch(function (error) {
                    });
                },

                getTask(){
                    axios.get('api/get-task').then(response=>{
                        this.tasks = response.data.tasks
                    })
                }
            },
            watch: {
            // whenever task changes, this function will run
                task: function (newTask, oldTask) {
                this.getTask()
                }
            },
            created() {
                    this.getTask()
            },
             beforeRouteEnter (to, from, next) {
               if (!window.Laravel.isLoggedin) {
                     return next('/');
                 }

                next();
            }
        }
    </script>
