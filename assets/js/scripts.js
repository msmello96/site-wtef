/*
//Tabs Box
if($('.tabs-box').length){
    $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
        e.preventDefault();

        var target = $($(this).attr('data-tab'));
        
        if ($(target).is(':visible')){
            return false;
        }else{
            target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
            target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
            $(target).fadeIn(100);
            $(target).addClass('active-tab');
        }
    });
}
*/

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove a classe 'active-btn' de todos os botões
        document.querySelectorAll('.tab-btn').forEach(item => item.classList.remove('active-btn'));
        // Adiciona a classe 'active-btn' ao botão clicado
        this.classList.add('active-btn');

        // Esconde todos os conteúdos e remove a classe 'active-tab'
        document.querySelectorAll('.tab').forEach(tab => {
            tab.style.display = 'none';
            tab.classList.remove('active-tab');
        });
        
        // Mostra o conteúdo correspondente e adiciona a classe 'active-tab'
        const tabId = this.getAttribute('data-tab');
        const activeTab = document.querySelector(tabId);
        activeTab.style.display = 'block';
        activeTab.classList.add('active-tab');
    });
});

// Inicializa a primeira aba como visível e aplica 'display: none' nas outras
const firstTab = document.querySelector('.tab');
firstTab.style.display = 'block';
firstTab.classList.add('active-tab');

document.querySelectorAll('.tab').forEach((tab, index) => {
    if (index !== 0) {
        tab.style.display = 'none';
    }
});





    