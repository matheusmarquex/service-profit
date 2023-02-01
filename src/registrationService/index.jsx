import React from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const RegistrationService = () => {
  return (
    <div className="container-general-register">
      <div className="container-dataServices">
        <div className="title-ds">
          <h1>DADOS DE SERVIÇOS</h1>
        </div>
        <div className="name-category-ds">
          <div className="name-ds">
            <label>Nome:</label>
            <input type="text" name="nome" />
          </div>
          <div className="category-ds">
            <label>Categoria:</label>
            <select>
              <option value="">Selecione uma categoria</option>
              <option value="Administrador">Check-Ups</option>
              <option value="Gerente">Consultas</option>
              <option value="Vendedor">Procedimentos</option>
              <option value="Testes Rápidos">Procedimentos</option>
              <option value="Vacinas">Procedimentos</option>
            </select>
          </div>
        </div>
        <div className="oqe-ds">
          <p className="titleEditorText">O que é:</p>
          <ReactQuill
            className="whichIs"
            theme="snow"
            // value={formik.values.whichIs}
            // onChange={onChangeReactQuill}
            style={{
              height: "200px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div className="indi-ds">
          <p className="titleEditorText">Indicado para:</p>
          <ReactQuill
            className="whichIs"
            theme="snow"
            // value={formik.values.whichIs}
            // onChange={onChangeReactQuill}
            style={{
              height: "200px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div className="norec-ds">
          <p className="titleEditorText">Não recomendado para:</p>
          <ReactQuill
            className="whichIs"
            theme="snow"
            // value={formik.values.whichIs}
            // onChange={onChangeReactQuill}
            style={{
              height: "200px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div className="howservice-ds">
          <p className="titleEditorText">Como o serviço é feito:</p>
          <ReactQuill
            className="whichIs"
            theme="snow"
            // value={formik.values.whichIs}
            // onChange={onChangeReactQuill}
            style={{
              height: "200px",
              marginBottom: "20px",
            }}
          />
        </div>
        <div className="cuidados-ds">
          <p className="titleEditorText">
            Cuidados antes e após o atendimento:
          </p>
          <ReactQuill
            className="whichIs"
            theme="snow"
            // value={formik.values.whichIs}
            // onChange={onChangeReactQuill}
            style={{
              height: "200px",
              marginBottom: "20px",
            }}
          />
        </div>
      </div>
      <div className="container-proced">
        <div className="title-proced">
          <h1>PROCEDIMENTOS</h1>
        </div>
        <div>
          <p style={{ fontWeight: "700" }}>Lista de procedimentos</p>
        </div>
        <div className="listProced">
          <div className="divProced">
            <p>Distribuição Corporal</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
          <div className="divProced">
            <p>Teste 1</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
          <div className="divProced">
            <p>Distribuição de testes</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
          <div className="divProced">
            <p>Distribuição</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
          <div className="divProced">
            <p>Distribuição Corporal</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
          <div className="divProced">
            <p>Distribuição Corporal</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
          <div className="divProced">
            <p>Distribuição Corporal</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
          <div className="divProced">
            <p>Distribuição Corporal</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
          <div className="divProced">
            <p>Distribuição Corporal</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
          <div className="divProced">
            <p>Distribuição Corporal</p>
            <div className="iconX">
              <AiOutlineClose />
            </div>
          </div>
        </div>
        <div className="selectProced">
          <select name="" id="">
            <option value="">Busque pelo procedimento</option>
            <option value="Acompanhamento de gestantes">
              Acompanhamento de gestantes
            </option>
            <option value="Anamneses">Anamneses</option>
            <option value="Aplicação de injetáveis">
              Aplicação de injetáveis
            </option>
            <option value="Avaliação antropométrica">
              Avaliação antropométrica
            </option>
            <option value="Dependência nicotínica">
              Dependência nicotínica
            </option>
            <option value="Dispensação de medicamentos">
              Dispensação de medicamentos
            </option>
            <option value="Distribuição Corporal">Distribuição Corporal</option>
            <option value="Distribuição corporal (Bioimpedância)">
              Distribuição corporal (Bioimpedância)
            </option>
            <option value="Distribuição Corporal Bioimpedância">
              Distribuição Corporal Bioimpedância
            </option>
            <option value="Escore de risco global">
              Escore de risco global
            </option>
            <option value="Hábito Tabágico">Hábito Tabágico</option>
            <option value="Índice de massa corporal">
              Índice de massa corporal
            </option>
            <option value="Orientação ao paciente">
              Orientação ao paciente
            </option>
            <option value="Pack de medicamentos">Pack de medicamentos</option>
            <option value="Perfil lipídico">Perfil lipídico</option>
            <option value="Perfuração de lóbulo">Perfuração de lóbulo</option>
            <option value="Prescrição farmacêutica">
              Prescrição farmacêutica
            </option>
            <option value="Pressão arterial">Pressão arterial</option>
            <option value="Questionário de saúde do paciente">
              Questionário de saúde do paciente
            </option>
            <option value="Risco de Diabetes">Risco de Diabetes</option>
            <option value="Risco de Diabetes - findrisc">
              Risco de Diabetes - findrisc
            </option>
            <option value="Teste de controle da asma">
              Teste de controle da asma
            </option>
            <option value="Teste de glicemia">Teste de glicemia</option>
            <option value="Testes Rápidos">Testes Rápidos</option>
            <option value="Testes rápidos Profit Pharma">
              Testes rápidos Profit Pharma
            </option>
            <option value="Triagem Covid-19">Triagem Covid-19</option>
            <option value="Triagem Fisiológica">Triagem Fisiológica</option>
            <option value="Triagem fisiológica - Cnoga">
              Triagem fisiológica - Cnoga
            </option>
            <option value="Vacinas">Vacinas</option>
          </select>
        </div>
      </div>

      <div className="container-info">
        <div className="title-info">
          <h1>INFORMAÇÕES FINANCEIRAS</h1>
        </div>
        <div className="inputs-info">
          <div className="label-input-info">
            <label htmlFor="">Código interno do serviço</label>
            <input type="text" id="codeService" placeholder="Insira o código aqui"/>
          </div>
          <div className="label-input-info">
            <label htmlFor="">Preço</label>
            <input type="text" id="priceInput" placeholder="Insira o preço aqui"/>
          </div>
          <div className="label-input-info">
            <label htmlFor="">% de custo</label>
            <input type="text" id="percInput" placeholder="Insira o custo aqui"/>
          </div>
        </div>
      </div>

      <div className="container-info">
        <div className="title-info">
          <h1>COMISSIONAMENTO</h1>
        </div>
        <div className="inputs-info">
          <div className="label-input-info">
            <label htmlFor="">Meta</label>
            <label htmlFor="" style={{fontSize:"12px"}}>Meta atendimento / Profissional Mês</label>
            <input type="text" id="codeService" placeholder="Insira a meta aqui"/>
          </div>
          <div className="label-input-info">
            <label htmlFor="" style={{marginBottom:"1.5em"}}>Comissão</label>
            <div>
            <select name="" id="" style={{marginRight:"1.5em"}}>
              <option value="">Tipo</option>
              <option value="">R$</option>
              <option value="">%</option>
            </select>
            <input type="text" id="percInput" placeholder="Insira a comissão aqui"/>
          </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default RegistrationService;
