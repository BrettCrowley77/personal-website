import React from "react";
import "./styles.css";

type PublicationItem = {
  citation: string;
  link: string | null;
};

const journalArticles: PublicationItem[] = [
  {
    citation:
      "Jain S, Ahsan S, Robb Z, Crowley B, Walters D. (2024). The cost of inaction: a global tool to inform nutrition policy and investment decisions on global nutrition targets. Health Policy and Planning.",
    link: "https://doi.org/10.1093/heapol/czae056",
  },
  {
    citation:
      "Cotton C, Kashi B, Lloyd-Ellis H, Tremblay F, Crowley B. (2021). Quantifying the Economic Impacts of COVID-19 Policy Responses on Canada’s Provinces in (Almost) Real-Time. Canadian Journal of Economics, vol. 54.",
    link: "https://doi.org/10.1111%2Fcaje.12567",
  },
];

const professionalReports: PublicationItem[] = [
  {
    citation:
      "Bahn R, Carello S, Crowley B, Kashi B. (2022). Cost Benefit Analysis of Resilience in the Sahel Enhanced II (RISE II) Activities. Client: USAID.",
    link: null,
  },
  {
    citation:
      "Cotton C, Kashi B, Lloyd-Ellis H, Tremblay F, Crowley B. (2021). Quantifying the Economic Impacts of COVID-19 Policy Responses on Canada’s Provinces in (Almost) Real-Time. Canadian Journal of Economics, vol. 54.",
    link: "https://doi.org/10.1111%2Fcaje.12567",
  },
  {
    citation:
      "Crowley B, Schubert K, Kashi B. (2021). Evaluation-Based CBA Final Report: Benin Access to Markets Activity. Client: Millennium Challenge Corporation.",
    link: null,
  },
  {
    citation:
      "Wallace L, Carello S, Crowley B, Kaluwa B, Wong B. (2021). Malawi Priorities: Industrialization & Youth Employment Final Report. Client: Copenhagen Consensus Center and National Planning Commission of Malawi.",
    link: "https://copenhagenconsensus.com/publication/malawi-priorities-industrialization-and-youth-employment",
  },
  {
    citation:
      "Wallace L, Kashi B, Morawczynski O, Wensley M, Mbendera A, Henriques T, Davis S, Crowley B. (2021). DIAL 1.0 Endline Evaluation Report. Client: Digital Impact Alliance.",
    link: "https://limestone-analytics.com/wp-content/uploads/2021/09/2020-DIAL-1.0-Endline-Evaluation-Draft-Final-Report-Extended-Executive-Summary.pdf",
  },
  {
    citation:
      "Brady C, Cotton C, Crowley B, Davis S, Farquharson C, Kashi B, Lloyd-Ellis H, Tremblay T. (2021). Emerging from Crisis? Malawi in 2025. Client: National Planning Commission of Malawi.",
    link: "https://limestone-analytics.com/wp-content/uploads/2021/02/Malawi-Scenario-Planning-Report-2021-02-01-1.pdf",
  },
  {
    citation:
      "Martinez N, Simpson D, Kashi B, Rabearison M, Crowley B. (2020). Economic Analysis of the Conservation and Communities Project. Client: USAID/Madagascar.",
    link: null,
  },
  {
    citation:
      "Mackinnon J, Biddison M, Wentzel K, Crowley B (2020). Power Africa Transactions and Reforms Program Performance Evaluation, Final Report. Client: Power Africa.",
    link: null,
  },
  {
    citation:
      "Crowley B, Mabee W, McKegney N, Kashi B, Lloyd-Ellis H, and Gribbin K. (2020). Kingston Broadband Gap Analysis. Client: City of Kingston.",
    link: "https://limestone-analytics.com/wp-content/uploads/2023/09/Kingston-Broadband-Final-Report-2020-01-20.pdf",
  },
];

const PublicationsSection: React.FC = () => {
  return (
    <section className="publications-section">
      <h2>Publications</h2>

      <div className="journal-articles">
        <h4>Journal Articles</h4>
        <ul>
          {journalArticles.map((item, index) => (
            <li key={index}>
              <p>
                {item.citation}
                {item.link != null && (
                  <>
                    {` `}
                    <a href={item.link} target="_blank">
                      {`Available online`}
                    </a>
                    .
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="professional-reports">
        <h4>Professional Reports</h4>
        <ul>
          {professionalReports.map((item, index) => (
            <li key={index}>
              <p>
                {item.citation}
                {item.link != null && (
                  <>
                    {` `}
                    <a href={item.link} target="_blank">
                      {`Available online`}
                    </a>
                    .
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PublicationsSection;
