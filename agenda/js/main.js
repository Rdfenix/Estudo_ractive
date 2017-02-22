var ToDo = Ractive.extend({
  template: '#toDo',
  oninit: function(){
    this.on('addWork', function(){
      var newWork = {
        name: this.get('Tarefa')
      }

      this.push('work', newWork);
      this.set('Tarefa', '');

      return false;
    });
  },
  data:function(){
    return {
      work: [{
        name: 'Ir ao trabalho'
      }]
    }
  }

});

var ractive = new Ractive({
  el: '#app',
  template: '#template',
  components:{
      toDo: ToDo
  },
  data: {
    title: 'Agenda de Contatos',
    subtitle: 'agenda para guardar suas tarefas'
  }
});
