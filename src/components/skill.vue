<template>
<div>
<sui-message info>Skills</sui-message> 
<sui-table celled striped>
    <sui-table-header>
      <sui-table-row>
        <sui-table-headerCell colspan="3">My Skills</sui-table-headerCell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell collapsing><i class="fab fa-html5"></i> HTML5
        </sui-table-cell>
        <sui-table-cell>
    <sui-progress progress size="small" percent="55" />
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell><i class="fab fa-css3-alt"></i> CSS3
        </sui-table-cell>
        <sui-table-cell>
    <sui-progress progress size="small" percent="55" />            
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell><i class="fab fa-js-square"></i> JavaScript
        </sui-table-cell>
        <sui-table-cell>
    <sui-progress progress size="small" percent="35" />            
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell><i class="fab fa-python"></i> Python
        </sui-table-cell>
        <sui-table-cell><sui-progress progress size="small" percent="40" />
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell><i class="fab fa-adobe"></i> Adobe illustrator
        </sui-table-cell>
        <sui-table-cell><sui-progress progress size="small" percent="50" />
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell><i class="fab fa-vuejs"></i> Vue.js
        </sui-table-cell>
        <sui-table-cell><sui-progress progress size="small" percent="40" />
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Other
        </sui-table-cell>
        <sui-table-cell>Slack, Chatwork, Trello, Backlog, Git, SourceTree
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
</sui-table>    
</div>
</template>

<script>
export default {
    name:'skill',

}
</script>

<style scoped>
div{
    margin: 10px;
}
</style>
