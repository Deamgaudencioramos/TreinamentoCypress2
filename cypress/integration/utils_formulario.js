const SELETECTOR = require('./elements').Elements
export function criarUsuario(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get(SELETECTOR.btn_novoUsuario).click();
    cy.get('#user_name').type('Deam')
    cy.get('#user_lastname').type('Gaudencio')
    cy.get('#user_email').type('teste@teste.com.br')
    cy.get('#user_address').type('teste,123')
    cy.get('#user_university').type('Unipe')
    cy.get('#user_profile').type('analista de test')
    cy.get('#user_gender').type('Masculino')
    cy.get('#user_age').type('20')
    cy.get('input[value="Criar"]').click()
    cy.get('p[id="notice"]').contains('Usuário Criado com sucesso')
}

export function listarUsuarios(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get('a[href="/users"]').click()
    cy.get('h5[class="center"]:Contains("Lista de Usuários")').should('be.visible')
}

export function excluirUsuario(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get('a[href="/users"]').click()
    cy.get('td a[data-confirm="Vocee está certo disso?"]').eq(0).click()
    cy.get('p[id="notice"]:Contains("Seu Usuário foi removido com sucesso!")').should('be.visible')
}

export function criarUsuarioIframe(){
    cy.get(':nth-child(3) > .collapsible-header').click()
    cy.get('.active > .collapsible-body > ul > :nth-child(2) > a').click()
    cy.iframe('[id="id_do_iframe"]').find('a[tabindex="0"][class="collapsible-header "]').click();
    cy.iframe('[id="id_do_iframe"]').find('a[href="/users/new"]').click({force: true});
    cy.wait(1000)
    cy.iframe('[id="id_do_iframe"]').find('div[class="col s6"] input[id="user_name"]').click().type('deam');
    cy.iframe('[id="id_do_iframe"]').find('div[class="col s6"] input[id="user_lastname"]').click().type('gaudencio');
    cy.iframe('[id="id_do_iframe"]').find('div[class="col s6"] input[id="user_email"]').click().type('teste@teste.com.br');
    cy.iframe('[id="id_do_iframe"]').find('div[class="col s6"] input[id="user_address"]').click().type('rua do teste 123');
    cy.iframe('[id="id_do_iframe"]').find('div[class="col s6"] input[id="user_university"]').click().type('Univerisade Unipe');
    cy.iframe('[id="id_do_iframe"]').find('div[class="col s6"] input[id="user_profile"]').click().type('Analista QA');
    cy.iframe('[id="id_do_iframe"]').find('div[class="col s6"] input[id="user_gender"]').click().type('Masculino');
    cy.iframe('[id="id_do_iframe"]').find('div[class="col s6"] input[id="user_age"]').click().type('19');
    cy.iframe('[id="id_do_iframe"]').find('div[class="col s12 center"] input[value="Criar"]').click()
}