const stockList = [
  {
    "symbol": "20MICRONS.BSE",
    "name": "20 Microns Limited"
  },
  {
    "symbol": "21STCENMGM.BSE",
    "name": "21st Century Management Services Limited"
  },
  {
    "symbol": "360ONE.BSE",
    "name": "360 ONE WAM LIMITED"
  },
  {
    "symbol": "3IINFOLTD.BSE",
    "name": "3i Infotech Limited"
  },
  {
    "symbol": "3MINDIA.BSE",
    "name": "3M India Limited"
  },
  {
    "symbol": "3PLAND.BSE",
    "name": "3P Land Holdings Limited"
  },
  {
    "symbol": "5PAISA.BSE",
    "name": "5Paisa Capital Limited"
  },
  {
    "symbol": "63MOONS.BSE",
    "name": "63 moons technologies limited"
  },
  {
    "symbol": "A2ZINFRA.BSE",
    "name": "A2Z Infra Engineering Limited"
  },
  {
    "symbol": "AAATECH.BSE",
    "name": "AAA Technologies Limited"
  },
  {
    "symbol": "AADHARHFC.BSE",
    "name": "Aadhar Housing Finance Limited"
  },
  {
    "symbol": "AAKASH.BSE",
    "name": "Aakash Exploration Services Limited"
  },
  {
    "symbol": "AAREYDRUGS.BSE",
    "name": "Aarey Drugs & Pharmaceuticals Limited"
  },
  {
    "symbol": "AARON.BSE",
    "name": "Aaron Industries Limited"
  },
  {
    "symbol": "AARTECH.BSE",
    "name": "Aartech Solonics Limited"
  },
  {
    "symbol": "AARTIDRUGS.BSE",
    "name": "Aarti Drugs Limited"
  },
  {
    "symbol": "AARTIIND.BSE",
    "name": "Aarti Industries Limited"
  },
  {
    "symbol": "AARTIPHARM.BSE",
    "name": "Aarti Pharmalabs Limited"
  },
  {
    "symbol": "AARTISURF.BSE",
    "name": "Aarti Surfactants Limited"
  },
  {
    "symbol": "AARVEEDEN.BSE",
    "name": "Aarvee Denims & Exports Limited"
  },
  {
    "symbol": "AARVI.BSE",
    "name": "Aarvi Encon Limited"
  },
  {
    "symbol": "AAVAS.BSE",
    "name": "Aavas Financiers Limited"
  },
  {
    "symbol": "ABAN.BSE",
    "name": "Aban Offshore Limited"
  },
  {
    "symbol": "ABB.BSE",
    "name": "ABB India Limited"
  },
  {
    "symbol": "ABBOTINDIA.BSE",
    "name": "Abbott India Limited"
  },
  {
    "symbol": "ABCAPITAL.BSE",
    "name": "Aditya Birla Capital Limited"
  },
  {
    "symbol": "ABDL.BSE",
    "name": "Allied Blenders and Distillers Limited"
  },
  {
    "symbol": "ABFRL.BSE",
    "name": "Aditya Birla Fashion and Retail Limited"
  },
  {
    "symbol": "ABINFRA.BSE",
    "name": "A B Infrabuild Limited"
  },
  {
    "symbol": "ABMINTLLTD.BSE",
    "name": "ABM International Limited"
  },
  {
    "symbol": "ABREL.BSE",
    "name": "Aditya Birla Real Estate Limited"
  },
  {
    "symbol": "ABSLAMC.BSE",
    "name": "Aditya Birla Sun Life AMC Limited"
  },
  {
    "symbol": "ACC.BSE",
    "name": "ACC Limited"
  },
  {
    "symbol": "ACCELYA.BSE",
    "name": "Accelya Solutions India Limited"
  },
  {
    "symbol": "ACCURACY.BSE",
    "name": "Accuracy Shipping Limited"
  },
  {
    "symbol": "ACE.BSE",
    "name": "Action Construction Equipment Limited"
  },
  {
    "symbol": "ACEINTEG.BSE",
    "name": "Ace Integrated Solutions Limited"
  },
  {
    "symbol": "ACI.BSE",
    "name": "Archean Chemical Industries Limited"
  },
  {
    "symbol": "ACL.BSE",
    "name": "Andhra Cements Limited"
  },
  {
    "symbol": "ACLGATI.BSE",
    "name": "Allcargo Gati Limited"
  },
  {
    "symbol": "ACMESOLAR.BSE",
    "name": "Acme Solar Holdings Limited"
  },
  {
    "symbol": "ADANIENSOL.BSE",
    "name": "Adani Energy Solutions Limited"
  },
  {
    "symbol": "ADANIENT.BSE",
    "name": "Adani Enterprises Limited"
  },
  {
    "symbol": "ADANIGREEN.BSE",
    "name": "Adani Green Energy Limited"
  },
  {
    "symbol": "ADANIPORTS.BSE",
    "name": "Adani Ports and Special Economic Zone Limited"
  },
  {
    "symbol": "ADANIPOWER.BSE",
    "name": "Adani Power Limited"
  },
  {
    "symbol": "ADFFOODS.BSE",
    "name": "ADF Foods Limited"
  },
  {
    "symbol": "ADL.BSE",
    "name": "Archidply Decor Limited"
  },
  {
    "symbol": "ADOR.BSE",
    "name": "Ador Welding Limited"
  },
  {
    "symbol": "ADROITINFO.BSE",
    "name": "Adroit Infotech Limited"
  },
  {
    "symbol": "ADSL.BSE",
    "name": "Allied Digital Services Limited"
  },
  {
    "symbol": "ADVANIHOTR.BSE",
    "name": "Advani Hotels & Resorts (India) Limited"
  },
  {
    "symbol": "ADVENZYMES.BSE",
    "name": "Advanced Enzyme Technologies Limited"
  },
  {
    "symbol": "AEGISLOG.BSE",
    "name": "Aegis Logistics Limited"
  },
  {
    "symbol": "AEROFLEX.BSE",
    "name": "Aeroflex Industries Limited"
  },
  {
    "symbol": "AETHER.BSE",
    "name": "Aether Industries Limited"
  },
  {
    "symbol": "AFCONS.BSE",
    "name": "Afcons Infrastructure Limited"
  },
  {
    "symbol": "AFFLE.BSE",
    "name": "Affle (India) Limited"
  },
  {
    "symbol": "AFFORDABLE.BSE",
    "name": "Affordable Robotic & Automation Limited"
  },
  {
    "symbol": "AFIL.BSE",
    "name": "Akme Fintrade (India) Limited"
  },
  {
    "symbol": "AFSL.BSE",
    "name": "Abans Financial Services Limited"
  },
  {
    "symbol": "AGARIND.BSE",
    "name": "Agarwal Industrial Corporation Limited"
  },
  {
    "symbol": "AGARWALEYE.BSE",
    "name": "Dr. Agarwal's Health Care Limited"
  },
  {
    "symbol": "AGI.BSE",
    "name": "AGI Greenpac Limited"
  },
  {
    "symbol": "AGIIL.BSE",
    "name": "Agi Infra Limited"
  },
  {
    "symbol": "AGRITECH.BSE",
    "name": "Agri-Tech (India) Limited"
  },
  {
    "symbol": "AGROPHOS.BSE",
    "name": "Agro Phos India Limited"
  },
  {
    "symbol": "AGSTRA.BSE",
    "name": "AGS Transact Technologies Limited"
  },
  {
    "symbol": "AHLADA.BSE",
    "name": "Ahlada Engineers Limited"
  },
  {
    "symbol": "AHLEAST.BSE",
    "name": "Asian Hotels (East) Limited"
  },
  {
    "symbol": "AHLUCONT.BSE",
    "name": "Ahluwalia Contracts (India) Limited"
  },
  {
    "symbol": "AIAENG.BSE",
    "name": "AIA Engineering Limited"
  },
  {
    "symbol": "AIIL.BSE",
    "name": "Authum Investment & Infrastructure Limited"
  },
  {
    "symbol": "AIRAN.BSE",
    "name": "Airan Limited"
  },
  {
    "symbol": "AIROLAM.BSE",
    "name": "Airo Lam limited"
  },
  {
    "symbol": "AJANTPHARM.BSE",
    "name": "Ajanta Pharma Limited"
  },
  {
    "symbol": "AJAXENGG.BSE",
    "name": "Ajax Engineering Limited"
  },
  {
    "symbol": "AJMERA.BSE",
    "name": "Ajmera Realty & Infra India Limited"
  },
  {
    "symbol": "AJOONI.BSE",
    "name": "Ajooni Biotech Limited"
  },
  {
    "symbol": "AKASH.BSE",
    "name": "Akash Infra-Projects Limited"
  },
  {
    "symbol": "AKG.BSE",
    "name": "Akg Exim Limited"
  },
  {
    "symbol": "AKI.BSE",
    "name": "AKI India Limited"
  },
  {
    "symbol": "AKSHAR.BSE",
    "name": "Akshar Spintex Limited"
  },
  {
    "symbol": "AKSHARCHEM.BSE",
    "name": "AksharChem India Limited"
  },
  {
    "symbol": "AKSHOPTFBR.BSE",
    "name": "Aksh Optifibre Limited"
  },
  {
    "symbol": "AKUMS.BSE",
    "name": "Akums Drugs and Pharmaceuticals Limited"
  },
  {
    "symbol": "AKZOINDIA.BSE",
    "name": "Akzo Nobel India Limited"
  },
  {
    "symbol": "ALANKIT.BSE",
    "name": "Alankit Limited"
  },
  {
    "symbol": "ALBERTDAVD.BSE",
    "name": "Albert David Limited"
  },
  {
    "symbol": "ALEMBICLTD.BSE",
    "name": "Alembic Limited"
  },
  {
    "symbol": "ALICON.BSE",
    "name": "Alicon Castalloy Limited"
  },
  {
    "symbol": "ALIVUS.BSE",
    "name": "Alivus Life Sciences Limited"
  },
  {
    "symbol": "ALKALI.BSE",
    "name": "Alkali Metals Limited"
  },
  {
    "symbol": "ALKEM.BSE",
    "name": "Alkem Laboratories Limited"
  },
  {
    "symbol": "ALKYLAMINE.BSE",
    "name": "Alkyl Amines Chemicals Limited"
  },
  {
    "symbol": "ALLCARGO.BSE",
    "name": "Allcargo Logistics Limited"
  },
  {
    "symbol": "ALLDIGI.BSE",
    "name": "Alldigi Tech Limited"
  },
  {
    "symbol": "ALMONDZ.BSE",
    "name": "Almondz Global Securities Limited"
  },
  {
    "symbol": "ALOKINDS.BSE",
    "name": "Alok Industries Limited"
  },
  {
    "symbol": "ALPA.BSE",
    "name": "Alpa Laboratories Limited"
  },
  {
    "symbol": "ALPHAGEO.BSE",
    "name": "Alphageo (India) Limited"
  },
  {
    "symbol": "ALPSINDUS.BSE",
    "name": "Alps Industries Limited"
  },
  {
    "symbol": "AMBER.BSE",
    "name": "Amber Enterprises India Limited"
  },
  {
    "symbol": "AMBICAAGAR.BSE",
    "name": "Ambica Agarbathies & Aroma industries Limited"
  },
  {
    "symbol": "AMBIKCO.BSE",
    "name": "Ambika Cotton Mills Limited"
  },
  {
    "symbol": "AMBUJACEM.BSE",
    "name": "Ambuja Cements Limited"
  },
  {
    "symbol": "AMDIND.BSE",
    "name": "AMD Industries Limited"
  },
  {
    "symbol": "AMIORG.BSE",
    "name": "Ami Organics Limited"
  },
  {
    "symbol": "AMJLAND.BSE",
    "name": "Amj Land Holdings Limited"
  },
  {
    "symbol": "AMNPLST.BSE",
    "name": "Amines & Plasticizers Limited"
  },
  {
    "symbol": "AMRUTANJAN.BSE",
    "name": "Amrutanjan Health Care Limited"
  },
  {
    "symbol": "ANANDRATHI.BSE",
    "name": "Anand Rathi Wealth Limited"
  },
  {
    "symbol": "ANANTRAJ.BSE",
    "name": "Anant Raj Limited"
  },
  {
    "symbol": "ANDHRAPAP.BSE",
    "name": "ANDHRA PAPER LIMITED"
  },
  {
    "symbol": "ANDHRSUGAR.BSE",
    "name": "The Andhra Sugars Limited"
  },
  {
    "symbol": "ANGELONE.BSE",
    "name": "Angel One Limited"
  },
  {
    "symbol": "ANIKINDS.BSE",
    "name": "Anik Industries Limited"
  },
  {
    "symbol": "ANMOL.BSE",
    "name": "Anmol India Limited"
  },
  {
    "symbol": "ANSALAPI.BSE",
    "name": "Ansal Properties & Infrastructure Limited"
  },
  {
    "symbol": "ANTGRAPHIC.BSE",
    "name": "Antarctica Limited"
  },
  {
    "symbol": "ANUHPHR.BSE",
    "name": "Anuh Pharma Limited"
  },
  {
    "symbol": "ANUP.BSE",
    "name": "The Anup Engineering Limited"
  },
  {
    "symbol": "ANURAS.BSE",
    "name": "Anupam Rasayan India Limited"
  },
  {
    "symbol": "APARINDS.BSE",
    "name": "Apar Industries Limited"
  },
  {
    "symbol": "APCL.BSE",
    "name": "Anjani Portland Cement Limited"
  },
  {
    "symbol": "APCOTEXIND.BSE",
    "name": "Apcotex Industries Limited"
  },
  {
    "symbol": "APEX.BSE",
    "name": "Apex Frozen Foods Limited"
  },
  {
    "symbol": "APLAPOLLO.BSE",
    "name": "APL Apollo Tubes Limited"
  },
  {
    "symbol": "APLLTD.BSE",
    "name": "Alembic Pharmaceuticals Limited"
  },
  {
    "symbol": "APOLLO.BSE",
    "name": "Apollo Micro Systems Limited"
  },
  {
    "symbol": "APOLLOHOSP.BSE",
    "name": "Apollo Hospitals Enterprise Limited"
  },
  {
    "symbol": "APOLLOPIPE.BSE",
    "name": "Apollo Pipes Limited"
  },
  {
    "symbol": "APOLLOTYRE.BSE",
    "name": "Apollo Tyres Limited"
  },
  {
    "symbol": "APOLSINHOT.BSE",
    "name": "Apollo Sindoori Hotels Limited"
  },
  {
    "symbol": "APTECHT.BSE",
    "name": "Aptech Limited"
  },
  {
    "symbol": "APTUS.BSE",
    "name": "Aptus Value Housing Finance India Limited"
  },
  {
    "symbol": "ARCHIDPLY.BSE",
    "name": "Archidply Industries Limited"
  },
  {
    "symbol": "ARCHIES.BSE",
    "name": "Archies Limited"
  },
  {
    "symbol": "ARE&M.BSE",
    "name": "Amara Raja Energy & Mobility Limited"
  },
  {
    "symbol": "ARENTERP.BSE",
    "name": "Rajdarshan Industries Limited"
  },
  {
    "symbol": "ARIES.BSE",
    "name": "Aries Agro Limited"
  },
  {
    "symbol": "ARIHANTCAP.BSE",
    "name": "Arihant Capital Markets Limited"
  },
  {
    "symbol": "ARIHANTSUP.BSE",
    "name": "Arihant Superstructures Limited"
  },
  {
    "symbol": "ARKADE.BSE",
    "name": "Arkade Developers Limited"
  },
  {
    "symbol": "ARMANFIN.BSE",
    "name": "Arman Financial Services Limited"
  },
  {
    "symbol": "AROGRANITE.BSE",
    "name": "Aro Granite Industries Limited"
  },
  {
    "symbol": "ARROWGREEN.BSE",
    "name": "Arrow Greentech Limited"
  },
  {
    "symbol": "ARSHIYA.BSE",
    "name": "Arshiya Limited"
  },
  {
    "symbol": "ARTEMISMED.BSE",
    "name": "Artemis Medicare Services Limited"
  },
  {
    "symbol": "ARTNIRMAN.BSE",
    "name": "Art Nirman Limited"
  },
  {
    "symbol": "ARVEE.BSE",
    "name": "Arvee Laboratories (India) Limited"
  },
  {
    "symbol": "ARVIND.BSE",
    "name": "Arvind Limited"
  },
  {
    "symbol": "ARVINDFASN.BSE",
    "name": "Arvind Fashions Limited"
  },
  {
    "symbol": "ARVSMART.BSE",
    "name": "Arvind SmartSpaces Limited"
  },
  {
    "symbol": "ASAHIINDIA.BSE",
    "name": "Asahi India Glass Limited"
  },
  {
    "symbol": "ASAHISONG.BSE",
    "name": "Asahi Songwon Colors Limited"
  },
  {
    "symbol": "ASAL.BSE",
    "name": "Automotive Stampings and Assemblies Limited"
  },
  {
    "symbol": "ASALCBR.BSE",
    "name": "Associated Alcohols & Breweries Ltd."
  },
  {
    "symbol": "ASHAPURMIN.BSE",
    "name": "Ashapura Minechem Limited"
  },
  {
    "symbol": "ASHIANA.BSE",
    "name": "Ashiana Housing Limited"
  },
  {
    "symbol": "ASHIMASYN.BSE",
    "name": "Ashima Limited"
  },
  {
    "symbol": "ASHOKA.BSE",
    "name": "Ashoka Buildcon Limited"
  },
  {
    "symbol": "ASHOKAMET.BSE",
    "name": "Ashoka Metcast Limited"
  },
  {
    "symbol": "ASHOKLEY.BSE",
    "name": "Ashok Leyland Limited"
  },
  {
    "symbol": "ASIANENE.BSE",
    "name": "Asian Energy Services Limited"
  },
  {
    "symbol": "ASIANHOTNR.BSE",
    "name": "Asian Hotels (North) Limited"
  },
  {
    "symbol": "ASIANPAINT.BSE",
    "name": "Asian Paints Limited"
  },
  {
    "symbol": "ASIANTILES.BSE",
    "name": "Asian Granito India Limited"
  },
  {
    "symbol": "ASKAUTOLTD.BSE",
    "name": "ASK Automotive Limited"
  },
  {
    "symbol": "ASMS.BSE",
    "name": "Bartronics India Limited"
  },
  {
    "symbol": "ASPINWALL.BSE",
    "name": "Aspinwall and Company Limited"
  },
  {
    "symbol": "ASTEC.BSE",
    "name": "Astec LifeSciences Limited"
  },
  {
    "symbol": "ASTERDM.BSE",
    "name": "Aster DM Healthcare Limited"
  },
  {
    "symbol": "ASTRAL.BSE",
    "name": "Astral Limited"
  },
  {
    "symbol": "ASTRAMICRO.BSE",
    "name": "Astra Microwave Products Limited"
  },
  {
    "symbol": "ASTRAZEN.BSE",
    "name": "AstraZeneca Pharma India Limited"
  },
  {
    "symbol": "ASTRON.BSE",
    "name": "Astron Paper & Board Mill Limited"
  },
  {
    "symbol": "ATALREAL.BSE",
    "name": "Atal Realtech Limited"
  },
  {
    "symbol": "ATAM.BSE",
    "name": "Atam Valves Limited"
  },
  {
    "symbol": "ATGL.BSE",
    "name": "Adani Total Gas Limited"
  },
  {
    "symbol": "ATL.BSE",
    "name": "Allcargo Terminals Limited"
  },
  {
    "symbol": "ATLANTAA.BSE",
    "name": "ATLANTAA LIMITED"
  },
  {
    "symbol": "ATLASCYCLE.BSE",
    "name": "Atlas Cycles (Haryana) Limited"
  },
  {
    "symbol": "ATUL.BSE",
    "name": "Atul Limited"
  },
  {
    "symbol": "ATULAUTO.BSE",
    "name": "Atul Auto Limited"
  },
  {
    "symbol": "AUBANK.BSE",
    "name": "AU Small Finance Bank Limited"
  },
  {
    "symbol": "AURIONPRO.BSE",
    "name": "Aurionpro Solutions Limited"
  },
  {
    "symbol": "AUROPHARMA.BSE",
    "name": "Aurobindo Pharma Limited"
  },
  {
    "symbol": "AURUM.BSE",
    "name": "Aurum PropTech Limited"
  },
  {
    "symbol": "AUSOMENT.BSE",
    "name": "Ausom Enterprise Limited"
  },
  {
    "symbol": "AUTOAXLES.BSE",
    "name": "Automotive Axles Limited"
  },
  {
    "symbol": "AUTOIND.BSE",
    "name": "Autoline Industries Limited"
  },
  {
    "symbol": "AVADHSUGAR.BSE",
    "name": "Avadh Sugar & Energy Limited"
  },
  {
    "symbol": "AVALON.BSE",
    "name": "Avalon Technologies Limited"
  },
  {
    "symbol": "AVANTEL.BSE",
    "name": "Avantel Limited"
  },
  {
    "symbol": "AVANTIFEED.BSE",
    "name": "Avanti Feeds Limited"
  },
  {
    "symbol": "AVG.BSE",
    "name": "AVG Logistics Limited"
  },
  {
    "symbol": "AVL.BSE",
    "name": "Aditya Vision Limited"
  },
  {
    "symbol": "AVONMORE.BSE",
    "name": "Avonmore Capital & Management Services Limited"
  },
  {
    "symbol": "AVROIND.BSE",
    "name": "AVRO INDIA LIMITED"
  },
  {
    "symbol": "AVTNPL.BSE",
    "name": "AVT Natural Products Limited"
  },
  {
    "symbol": "AWFIS.BSE",
    "name": "Awfis Space Solutions Limited"
  },
  {
    "symbol": "AWHCL.BSE",
    "name": "Antony Waste Handling Cell Limited"
  },
  {
    "symbol": "AWL.BSE",
    "name": "AWL Agri Business Limited"
  },
  {
    "symbol": "AXISBANK.BSE",
    "name": "Axis Bank Limited"
  },
  {
    "symbol": "AXISCADES.BSE",
    "name": "AXISCADES Technologies Limited"
  },
  {
    "symbol": "AXITA.BSE",
    "name": "Axita Cotton Limited"
  },
  {
    "symbol": "AYMSYNTEX.BSE",
    "name": "AYM Syntex Limited"
  },
  {
    "symbol": "AZAD.BSE",
    "name": "Azad Engineering Limited"
  },
  {
    "symbol": "BAFNAPH.BSE",
    "name": "Bafna Pharmaceuticals Limited"
  },
  {
    "symbol": "BAGFILMS.BSE",
    "name": "B.A.G Films and Media Limited"
  },
  {
    "symbol": "BAIDFIN.BSE",
    "name": "Baid Finserv Limited"
  },
  {
    "symbol": "BAJAJ-AUTO.BSE",
    "name": "Bajaj Auto Limited"
  },
  {
    "symbol": "BAJAJCON.BSE",
    "name": "Bajaj Consumer Care Limited"
  },
  {
    "symbol": "BAJAJELEC.BSE",
    "name": "Bajaj Electricals Limited"
  },
  {
    "symbol": "BAJAJFINSV.BSE",
    "name": "Bajaj Finserv Limited"
  },
  {
    "symbol": "BAJAJHCARE.BSE",
    "name": "Bajaj Healthcare Limited"
  },
  {
    "symbol": "BAJAJHFL.BSE",
    "name": "Bajaj Housing Finance Limited"
  },
  {
    "symbol": "BAJAJHIND.BSE",
    "name": "Bajaj Hindusthan Sugar Limited"
  },
  {
    "symbol": "BAJAJHLDNG.BSE",
    "name": "Bajaj Holdings & Investment Limited"
  },
  {
    "symbol": "BAJAJINDEF.BSE",
    "name": "Indef Manufacturing Limited"
  },
  {
    "symbol": "BAJEL.BSE",
    "name": "Bajel Projects Limited"
  },
  {
    "symbol": "BAJFINANCE.BSE",
    "name": "Bajaj Finance Limited"
  },
  {
    "symbol": "BALAJEE.BSE",
    "name": "Shree Tirupati Balajee Agro Trading Company Limited"
  },
  {
    "symbol": "BALAJITELE.BSE",
    "name": "Balaji Telefilms Limited"
  },
  {
    "symbol": "BALAMINES.BSE",
    "name": "Balaji Amines Limited"
  },
  {
    "symbol": "BALAXI.BSE",
    "name": "BALAXI PHARMACEUTICALS LIMITED"
  },
  {
    "symbol": "BALKRISHNA.BSE",
    "name": "Balkrishna Paper Mills Limited"
  },
  {
    "symbol": "BALKRISIND.BSE",
    "name": "Balkrishna Industries Limited"
  },
  {
    "symbol": "BALMLAWRIE.BSE",
    "name": "Balmer Lawrie & Company Limited"
  },
  {
    "symbol": "BALPHARMA.BSE",
    "name": "Bal Pharma Limited"
  },
  {
    "symbol": "BALRAMCHIN.BSE",
    "name": "Balrampur Chini Mills Limited"
  },
  {
    "symbol": "BALUFORGE.BSE",
    "name": "Balu Forge Industries Limited"
  },
  {
    "symbol": "BANARBEADS.BSE",
    "name": "Banaras Beads Limited"
  },
  {
    "symbol": "BANARISUG.BSE",
    "name": "Bannari Amman Sugars Limited"
  },
  {
    "symbol": "BANCOINDIA.BSE",
    "name": "Banco Products (I) Limited"
  },
  {
    "symbol": "BANDHANBNK.BSE",
    "name": "Bandhan Bank Limited"
  },
  {
    "symbol": "BANG.BSE",
    "name": "Bang Overseas Limited"
  },
  {
    "symbol": "BANKA.BSE",
    "name": "Banka BioLoo Limited"
  },
  {
    "symbol": "BANKBARODA.BSE",
    "name": "Bank of Baroda"
  },
  {
    "symbol": "BANKINDIA.BSE",
    "name": "Bank of India"
  },
  {
    "symbol": "BANSALWIRE.BSE",
    "name": "Bansal Wire Industries Limited"
  },
  {
    "symbol": "BANSWRAS.BSE",
    "name": "Banswara Syntex Limited"
  },
  {
    "symbol": "BARBEQUE.BSE",
    "name": "Barbeque Nation Hospitality Limited"
  },
  {
    "symbol": "BASF.BSE",
    "name": "BASF India Limited"
  },
  {
    "symbol": "BASML.BSE",
    "name": "Bannari Amman Spinning Mills Limited"
  },
  {
    "symbol": "BATAINDIA.BSE",
    "name": "Bata India Limited"
  },
  {
    "symbol": "BAYERCROP.BSE",
    "name": "Bayer Cropscience Limited"
  },
  {
    "symbol": "BBL.BSE",
    "name": "Bharat Bijlee Limited"
  },
  {
    "symbol": "BBOX.BSE",
    "name": "Black Box Limited"
  },
  {
    "symbol": "BBTC.BSE",
    "name": "Bombay Burmah Trading Corporation Limited"
  },
  {
    "symbol": "BBTCL.BSE",
    "name": "B&B Triplewall Containers Limited"
  },
  {
    "symbol": "BCLIND.BSE",
    "name": "Bcl Industries Limited"
  },
  {
    "symbol": "BCONCEPTS.BSE",
    "name": "Brand Concepts Limited"
  },
  {
    "symbol": "BDL.BSE",
    "name": "Bharat Dynamics Limited"
  },
  {
    "symbol": "BEARDSELL.BSE",
    "name": "Beardsell Limited"
  },
  {
    "symbol": "BECTORFOOD.BSE",
    "name": "Mrs. Bectors Food Specialities Limited"
  },
  {
    "symbol": "BEDMUTHA.BSE",
    "name": "Bedmutha Industries Limited"
  },
  {
    "symbol": "BEL.BSE",
    "name": "Bharat Electronics Limited"
  },
  {
    "symbol": "BEML.BSE",
    "name": "BEML Limited"
  },
  {
    "symbol": "BEPL.BSE",
    "name": "Bhansali Engineering Polymers Limited"
  },
  {
    "symbol": "BERGEPAINT.BSE",
    "name": "Berger Paints (I) Limited"
  },
  {
    "symbol": "BESTAGRO.BSE",
    "name": "Best Agrolife Limited"
  },
  {
    "symbol": "BFINVEST.BSE",
    "name": "BF Investment Limited"
  },
  {
    "symbol": "BFUTILITIE.BSE",
    "name": "BF Utilities Limited"
  },
  {
    "symbol": "BGRENERGY.BSE",
    "name": "BGR Energy Systems Limited"
  },
  {
    "symbol": "BHAGCHEM.BSE",
    "name": "Bhagiradha Chemicals & Industries Limited"
  },
  {
    "symbol": "BHAGERIA.BSE",
    "name": "Bhageria Industries Limited"
  },
  {
    "symbol": "BHAGYANGR.BSE",
    "name": "Bhagyanagar India Limited"
  },
  {
    "symbol": "BHANDARI.BSE",
    "name": "Bhandari Hosiery Exports Limited"
  },
  {
    "symbol": "BHARATFORG.BSE",
    "name": "Bharat Forge Limited"
  },
  {
    "symbol": "BHARATGEAR.BSE",
    "name": "Bharat Gears Limited"
  },
  {
    "symbol": "BHARATRAS.BSE",
    "name": "Bharat Rasayan Limited"
  },
  {
    "symbol": "BHARATSE.BSE",
    "name": "Bharat Seats Limited"
  },
  {
    "symbol": "BHARATWIRE.BSE",
    "name": "Bharat Wire Ropes Limited"
  },
  {
    "symbol": "BHARTIARTL.BSE",
    "name": "Bharti Airtel Limited"
  },
  {
    "symbol": "BHARTIHEXA.BSE",
    "name": "Bharti Hexacom Limited"
  },
  {
    "symbol": "BHEL.BSE",
    "name": "Bharat Heavy Electricals Limited"
  },
  {
    "symbol": "BIGBLOC.BSE",
    "name": "Bigbloc Construction Limited"
  },
  {
    "symbol": "BIKAJI.BSE",
    "name": "Bikaji Foods International Limited"
  },
  {
    "symbol": "BIL.BSE",
    "name": "Bhartiya International Limited"
  },
  {
    "symbol": "BINANIIND.BSE",
    "name": "Binani Industries Limited"
  },
  {
    "symbol": "BIOCON.BSE",
    "name": "Biocon Limited"
  },
  {
    "symbol": "BIOFILCHEM.BSE",
    "name": "Biofil Chemicals & Pharmaceuticals Limited"
  },
  {
    "symbol": "BIRLACABLE.BSE",
    "name": "Birla Cable Limited"
  },
  {
    "symbol": "BIRLACORPN.BSE",
    "name": "Birla Corporation Limited"
  },
  {
    "symbol": "BIRLAMONEY.BSE",
    "name": "Aditya Birla Money Limited"
  },
  {
    "symbol": "BIRLANU.BSE",
    "name": "BirlaNu Limited"
  },
  {
    "symbol": "BLACKBUCK.BSE",
    "name": "Zinka Logistics Solutions Limited"
  },
  {
    "symbol": "BLAL.BSE",
    "name": "BEML Land Assets Limited"
  },
  {
    "symbol": "BLBLIMITED.BSE",
    "name": "BLB Limited"
  },
  {
    "symbol": "BLISSGVS.BSE",
    "name": "Bliss GVS Pharma Limited"
  },
  {
    "symbol": "BLKASHYAP.BSE",
    "name": "B. L. Kashyap and Sons Limited"
  },
  {
    "symbol": "BLS.BSE",
    "name": "BLS International Services Limited"
  },
  {
    "symbol": "BLSE.BSE",
    "name": "BLS E-Services Limited"
  },
  {
    "symbol": "BLUECHIP.BSE",
    "name": "Blue Chip India Limited"
  },
  {
    "symbol": "BLUECOAST.BSE",
    "name": "Blue Coast Hotels Limited"
  },
  {
    "symbol": "BLUEDART.BSE",
    "name": "Blue Dart Express Limited"
  },
  {
    "symbol": "BLUEJET.BSE",
    "name": "Blue Jet Healthcare Limited"
  },
  {
    "symbol": "BLUESTARCO.BSE",
    "name": "Blue Star Limited"
  },
  {
    "symbol": "BODALCHEM.BSE",
    "name": "Bodal Chemicals Limited"
  },
  {
    "symbol": "BOHRAIND.BSE",
    "name": "Bohra Industries Limited"
  },
  {
    "symbol": "BOMDYEING.BSE",
    "name": "Bombay Dyeing & Mfg Company Limited"
  },
  {
    "symbol": "BOROLTD.BSE",
    "name": "Borosil Limited"
  },
  {
    "symbol": "BORORENEW.BSE",
    "name": "BOROSIL RENEWABLES LIMITED"
  },
  {
    "symbol": "BOROSCI.BSE",
    "name": "Borosil Scientific Limited"
  },
  {
    "symbol": "BOSCHLTD.BSE",
    "name": "Bosch Limited"
  },
  {
    "symbol": "BPCL.BSE",
    "name": "Bharat Petroleum Corporation Limited"
  },
  {
    "symbol": "BPL.BSE",
    "name": "BPL Limited"
  },
  {
    "symbol": "BRIGADE.BSE",
    "name": "Brigade Enterprises Limited"
  },
  {
    "symbol": "BRITANNIA.BSE",
    "name": "Britannia Industries Limited"
  },
  {
    "symbol": "BRNL.BSE",
    "name": "Bharat Road Network Limited"
  },
  {
    "symbol": "BROOKS.BSE",
    "name": "Brooks Laboratories Limited"
  },
  {
    "symbol": "BSE.BSE",
    "name": "BSE Limited"
  },
  {
    "symbol": "BSHSL.BSE",
    "name": "Bombay Super Hybrid Seeds Limited"
  },
  {
    "symbol": "BSL.BSE",
    "name": "BSL Limited"
  },
  {
    "symbol": "BSOFT.BSE",
    "name": "BIRLASOFT LIMITED"
  },
  {
    "symbol": "BTML.BSE",
    "name": "Bodhi Tree Multimedia Limited"
  },
  {
    "symbol": "BUTTERFLY.BSE",
    "name": "Butterfly Gandhimathi Appliances Limited"
  },
  {
    "symbol": "BVCL.BSE",
    "name": "Barak Valley Cements Limited"
  },
  {
    "symbol": "BYKE.BSE",
    "name": "The Byke Hospitality Ltd"
  },
  {
    "symbol": "CALSOFT.BSE",
    "name": "California Software Company Limited"
  },
  {
    "symbol": "CAMLINFINE.BSE",
    "name": "Camlin Fine Sciences Limited"
  },
  {
    "symbol": "CAMPUS.BSE",
    "name": "Campus Activewear Limited"
  },
  {
    "symbol": "CAMS.BSE",
    "name": "Computer Age Management Services Limited"
  },
  {
    "symbol": "CANBK.BSE",
    "name": "Canara Bank"
  },
  {
    "symbol": "CANFINHOME.BSE",
    "name": "Can Fin Homes Limited"
  },
  {
    "symbol": "CANTABIL.BSE",
    "name": "Cantabil Retail India Limited"
  },
  {
    "symbol": "CAPACITE.BSE",
    "name": "Capacit'e Infraprojects Limited"
  },
  {
    "symbol": "CAPITALSFB.BSE",
    "name": "Capital Small Finance Bank Limited"
  },
  {
    "symbol": "CAPLIPOINT.BSE",
    "name": "Caplin Point Laboratories Limited"
  },
  {
    "symbol": "CAPTRUST.BSE",
    "name": "Capital Trust Limited"
  },
  {
    "symbol": "CARBORUNIV.BSE",
    "name": "Carborundum Universal Limited"
  },
  {
    "symbol": "CARERATING.BSE",
    "name": "CARE Ratings Limited"
  },
  {
    "symbol": "CARRARO.BSE",
    "name": "Carraro India Limited"
  },
  {
    "symbol": "CARTRADE.BSE",
    "name": "Cartrade Tech Limited"
  },
  {
    "symbol": "CARYSIL.BSE",
    "name": "CARYSIL LIMITED"
  },
  {
    "symbol": "CASTROLIND.BSE",
    "name": "Castrol India Limited"
  },
  {
    "symbol": "CCCL.BSE",
    "name": "Consolidated Construction Consortium Limited"
  },
  {
    "symbol": "CCHHL.BSE",
    "name": "Country Club Hospitality & Holidays Limited"
  },
  {
    "symbol": "CCL.BSE",
    "name": "CCL Products (India) Limited"
  },
  {
    "symbol": "CDSL.BSE",
    "name": "Central Depository Services (India) Limited"
  },
  {
    "symbol": "CEATLTD.BSE",
    "name": "CEAT Limited"
  },
  {
    "symbol": "CEIGALL.BSE",
    "name": "Ceigall India Limited"
  },
  {
    "symbol": "CELEBRITY.BSE",
    "name": "Celebrity Fashions Limited"
  },
  {
    "symbol": "CELLO.BSE",
    "name": "Cello World Limited"
  },
  {
    "symbol": "CENTENKA.BSE",
    "name": "Century Enka Limited"
  },
  {
    "symbol": "CENTEXT.BSE",
    "name": "Century Extrusions Limited"
  },
  {
    "symbol": "CENTRALBK.BSE",
    "name": "Central Bank of India"
  },
  {
    "symbol": "CENTRUM.BSE",
    "name": "Centrum Capital Limited"
  },
  {
    "symbol": "CENTUM.BSE",
    "name": "Centum Electronics Limited"
  },
  {
    "symbol": "CENTURYPLY.BSE",
    "name": "Century Plyboards (India) Limited"
  },
  {
    "symbol": "CERA.BSE",
    "name": "Cera Sanitaryware Limited"
  },
  {
    "symbol": "CEREBRAINT.BSE",
    "name": "Cerebra Integrated Technologies Limited"
  },
  {
    "symbol": "CESC.BSE",
    "name": "CESC Limited"
  },
  {
    "symbol": "CEWATER.BSE",
    "name": "Concord Enviro Systems Limited"
  },
  {
    "symbol": "CGCL.BSE",
    "name": "Capri Global Capital Limited"
  },
  {
    "symbol": "CGPOWER.BSE",
    "name": "CG Power and Industrial Solutions Limited"
  },
  {
    "symbol": "CHALET.BSE",
    "name": "Chalet Hotels Limited"
  },
  {
    "symbol": "CHAMBLFERT.BSE",
    "name": "Chambal Fertilizers & Chemicals Limited"
  },
  {
    "symbol": "CHEMBOND.BSE",
    "name": "Chembond Chemicals Ltd"
  },
  {
    "symbol": "CHEMCON.BSE",
    "name": "Chemcon Speciality Chemicals Limited"
  },
  {
    "symbol": "CHEMFAB.BSE",
    "name": "Chemfab Alkalis Limited"
  },
  {
    "symbol": "CHEMPLASTS.BSE",
    "name": "Chemplast Sanmar Limited"
  },
  {
    "symbol": "CHENNPETRO.BSE",
    "name": "Chennai Petroleum Corporation Limited"
  },
  {
    "symbol": "CHEVIOT.BSE",
    "name": "Cheviot Company Limited"
  },
  {
    "symbol": "CHOICEIN.BSE",
    "name": "Choice International Limited"
  },
  {
    "symbol": "CHOLAFIN.BSE",
    "name": "Cholamandalam Investment and Finance Company Limited"
  },
  {
    "symbol": "CHOLAHLDNG.BSE",
    "name": "Cholamandalam Financial Holdings Limited"
  },
  {
    "symbol": "CIEINDIA.BSE",
    "name": "CIE Automotive India Limited"
  },
  {
    "symbol": "CIFL.BSE",
    "name": "Capital India Finance Limited"
  },
  {
    "symbol": "CIGNITITEC.BSE",
    "name": "Cigniti Technologies Limited"
  },
  {
    "symbol": "CINELINE.BSE",
    "name": "Cineline India Limited"
  },
  {
    "symbol": "CINEVISTA.BSE",
    "name": "Cinevista Limited"
  },
  {
    "symbol": "CIPLA.BSE",
    "name": "Cipla Limited"
  },
  {
    "symbol": "CLEAN.BSE",
    "name": "Clean Science and Technology Limited"
  },
  {
    "symbol": "CLEDUCATE.BSE",
    "name": "CL Educate Limited"
  },
  {
    "symbol": "CLSEL.BSE",
    "name": "Chaman Lal Setia Exports Limited"
  },
  {
    "symbol": "CMSINFO.BSE",
    "name": "CMS Info Systems Limited"
  },
  {
    "symbol": "COALINDIA.BSE",
    "name": "Coal India Limited"
  },
  {
    "symbol": "COASTCORP.BSE",
    "name": "Coastal Corporation Limited"
  },
  {
    "symbol": "COCHINSHIP.BSE",
    "name": "Cochin Shipyard Limited"
  },
  {
    "symbol": "COFFEEDAY.BSE",
    "name": "Coffee Day Enterprises Limited"
  },
  {
    "symbol": "COFORGE.BSE",
    "name": "Coforge Limited"
  },
  {
    "symbol": "COLPAL.BSE",
    "name": "Colgate Palmolive (India) Limited"
  },
  {
    "symbol": "COMPUSOFT.BSE",
    "name": "Compucom Software Limited"
  },
  {
    "symbol": "COMSYN.BSE",
    "name": "Commercial Syn Bags Limited"
  },
  {
    "symbol": "CONCOR.BSE",
    "name": "Container Corporation of India Limited"
  },
  {
    "symbol": "CONCORDBIO.BSE",
    "name": "Concord Biotech Limited"
  },
  {
    "symbol": "CONFIPET.BSE",
    "name": "Confidence Petroleum India Limited"
  },
  {
    "symbol": "CONSOFINVT.BSE",
    "name": "Consolidated Finvest & Holdings Limited"
  },
  {
    "symbol": "CONTROLPR.BSE",
    "name": "Control Print Limited"
  },
  {
    "symbol": "CORALFINAC.BSE",
    "name": "Coral India Finance & Housing Limited"
  },
  {
    "symbol": "CORDSCABLE.BSE",
    "name": "Cords Cable Industries Limited"
  },
  {
    "symbol": "COROMANDEL.BSE",
    "name": "Coromandel International Limited"
  },
  {
    "symbol": "COSMOFIRST.BSE",
    "name": "COSMO FIRST LIMITED"
  },
  {
    "symbol": "COUNCODOS.BSE",
    "name": "Country Condo's Limited"
  },
  {
    "symbol": "CPCAP.BSE",
    "name": "CP Capital Limited"
  },
  {
    "symbol": "CRAFTSMAN.BSE",
    "name": "Craftsman Automation Limited"
  },
  {
    "symbol": "CREATIVE.BSE",
    "name": "Creative Newtech Limited"
  },
  {
    "symbol": "CREATIVEYE.BSE",
    "name": "Creative Eye Limited"
  },
  {
    "symbol": "CREDITACC.BSE",
    "name": "CREDITACCESS GRAMEEN LIMITED"
  },
  {
    "symbol": "CREST.BSE",
    "name": "Crest Ventures Limited"
  },
  {
    "symbol": "CRISIL.BSE",
    "name": "CRISIL Limited"
  },
  {
    "symbol": "CROMPTON.BSE",
    "name": "Crompton Greaves Consumer Electricals Limited"
  },
  {
    "symbol": "CROWN.BSE",
    "name": "Crown Lifters Limited"
  },
  {
    "symbol": "CSBBANK.BSE",
    "name": "CSB Bank Limited"
  },
  {
    "symbol": "CSLFINANCE.BSE",
    "name": "CSL Finance Limited"
  },
  {
    "symbol": "CTE.BSE",
    "name": "Cambridge Technology Enterprises Limited"
  },
  {
    "symbol": "CUB.BSE",
    "name": "City Union Bank Limited"
  },
  {
    "symbol": "CUBEXTUB.BSE",
    "name": "Cubex Tubings Limited"
  },
  {
    "symbol": "CUMMINSIND.BSE",
    "name": "Cummins India Limited"
  },
  {
    "symbol": "CUPID.BSE",
    "name": "Cupid Limited"
  },
  {
    "symbol": "CURAA.BSE",
    "name": "Cura Technologies Limited"
  },
  {
    "symbol": "CYBERMEDIA.BSE",
    "name": "Cyber Media (India) Limited"
  },
  {
    "symbol": "CYBERTECH.BSE",
    "name": "Cybertech Systems And Software Limited"
  },
  {
    "symbol": "CYIENT.BSE",
    "name": "Cyient Limited"
  },
  {
    "symbol": "CYIENTDLM.BSE",
    "name": "Cyient DLM Limited"
  },
  {
    "symbol": "DABUR.BSE",
    "name": "Dabur India Limited"
  },
  {
    "symbol": "DALBHARAT.BSE",
    "name": "Dalmia Bharat Limited"
  },
  {
    "symbol": "DALMIASUG.BSE",
    "name": "Dalmia Bharat Sugar and Industries Limited"
  },
  {
    "symbol": "DAMCAPITAL.BSE",
    "name": "Dam Capital Advisors Limited"
  },
  {
    "symbol": "DAMODARIND.BSE",
    "name": "Damodar Industries Limited"
  },
  {
    "symbol": "DANGEE.BSE",
    "name": "Dangee Dums Limited"
  },
  {
    "symbol": "DATAMATICS.BSE",
    "name": "Datamatics Global Services Limited"
  },
  {
    "symbol": "DATAPATTNS.BSE",
    "name": "Data Patterns (India) Limited"
  },
  {
    "symbol": "DAVANGERE.BSE",
    "name": "Davangere Sugar Company Limited"
  },
  {
    "symbol": "DBCORP.BSE",
    "name": "D.B.Corp Limited"
  },
  {
    "symbol": "DBEIL.BSE",
    "name": "Deepak Builders & Engineers India Limited"
  },
  {
    "symbol": "DBL.BSE",
    "name": "Dilip Buildcon Limited"
  },
  {
    "symbol": "DBOL.BSE",
    "name": "Dhampur Bio Organics Limited"
  },
  {
    "symbol": "DBREALTY.BSE",
    "name": "Valor Estate Limited"
  },
  {
    "symbol": "DBSTOCKBRO.BSE",
    "name": "DB (International) Stock Brokers Limited"
  },
  {
    "symbol": "DCAL.BSE",
    "name": "Dishman Carbogen Amcis Limited"
  },
  {
    "symbol": "DCBBANK.BSE",
    "name": "DCB Bank Limited"
  },
  {
    "symbol": "DCI.BSE",
    "name": "Dc Infotech And Communication Limited"
  },
  {
    "symbol": "DCM.BSE",
    "name": "DCM  Limited"
  },
  {
    "symbol": "DCMFINSERV.BSE",
    "name": "DCM Financial Services Limited"
  },
  {
    "symbol": "DCMNVL.BSE",
    "name": "DCM Nouvelle Limited"
  },
  {
    "symbol": "DCMSHRIRAM.BSE",
    "name": "DCM Shriram Limited"
  },
  {
    "symbol": "DCMSRIND.BSE",
    "name": "DCM Shriram Industries Limited"
  },
  {
    "symbol": "DCW.BSE",
    "name": "DCW Limited"
  },
  {
    "symbol": "DCXINDIA.BSE",
    "name": "DCX Systems Limited"
  },
  {
    "symbol": "DDEVPLSTIK.BSE",
    "name": "Ddev Plastiks Industries Limited"
  },
  {
    "symbol": "DECCANCE.BSE",
    "name": "Deccan Cements Limited"
  },
  {
    "symbol": "DEEDEV.BSE",
    "name": "DEE Development Engineers Limited"
  },
  {
    "symbol": "DEEPAKFERT.BSE",
    "name": "Deepak Fertilizers and Petrochemicals Corporation Limited"
  },
  {
    "symbol": "DEEPAKNTR.BSE",
    "name": "Deepak Nitrite Limited"
  },
  {
    "symbol": "DEEPINDS.BSE",
    "name": "Deep Industries Limited"
  },
  {
    "symbol": "DELHIVERY.BSE",
    "name": "Delhivery Limited"
  },
  {
    "symbol": "DELPHIFX.BSE",
    "name": "DELPHI WORLD MONEY LIMITED"
  },
  {
    "symbol": "DELTACORP.BSE",
    "name": "Delta Corp Limited"
  },
  {
    "symbol": "DELTAMAGNT.BSE",
    "name": "Delta Manufacturing Limited"
  },
  {
    "symbol": "DEN.BSE",
    "name": "Den Networks Limited"
  },
  {
    "symbol": "DENORA.BSE",
    "name": "De Nora India Limited"
  },
  {
    "symbol": "DENTA.BSE",
    "name": "Denta Water and Infra Solutions Limited"
  },
  {
    "symbol": "DEVIT.BSE",
    "name": "Dev Information Technology Limited"
  },
  {
    "symbol": "DEVYANI.BSE",
    "name": "Devyani International Limited"
  },
  {
    "symbol": "DGCONTENT.BSE",
    "name": "Digicontent Limited"
  },
  {
    "symbol": "DHAMPURSUG.BSE",
    "name": "Dhampur Sugar Mills Limited"
  },
  {
    "symbol": "DHANBANK.BSE",
    "name": "Dhanlaxmi Bank Limited"
  },
  {
    "symbol": "DHANI.BSE",
    "name": "Dhani Services Limited"
  },
  {
    "symbol": "DHANUKA.BSE",
    "name": "Dhanuka Agritech Limited"
  },
  {
    "symbol": "DHARMAJ.BSE",
    "name": "Dharmaj Crop Guard Limited"
  },
  {
    "symbol": "DHRUV.BSE",
    "name": "Dhruv Consultancy Services Limited"
  },
  {
    "symbol": "DHUNINV.BSE",
    "name": "Dhunseri Investments Limited"
  },
  {
    "symbol": "DIACABS.BSE",
    "name": "Diamond Power Infrastructure Limited"
  },
  {
    "symbol": "DIAMINESQ.BSE",
    "name": "Diamines & Chemicals Limited"
  },
  {
    "symbol": "DIAMONDYD.BSE",
    "name": "Prataap Snacks Limited"
  },
  {
    "symbol": "DICIND.BSE",
    "name": "DIC India Limited"
  },
  {
    "symbol": "DIFFNKG.BSE",
    "name": "Diffusion Engineers Limited"
  },
  {
    "symbol": "DIGIDRIVE.BSE",
    "name": "Digidrive Distributors Limited"
  },
  {
    "symbol": "DIGISPICE.BSE",
    "name": "DiGiSPICE Technologies Limited"
  },
  {
    "symbol": "DIGJAMLMTD.BSE",
    "name": "Digjam Limited"
  },
  {
    "symbol": "DIL.BSE",
    "name": "Debock Industries Limited"
  },
  {
    "symbol": "DISHTV.BSE",
    "name": "Dish TV India Limited"
  },
  {
    "symbol": "DIVGIITTS.BSE",
    "name": "Divgi Torqtransfer Systems Limited"
  },
  {
    "symbol": "DIVISLAB.BSE",
    "name": "Divi's Laboratories Limited"
  },
  {
    "symbol": "DIXON.BSE",
    "name": "Dixon Technologies (India) Limited"
  },
  {
    "symbol": "DJML.BSE",
    "name": "DJ Mediaprint & Logistics Limited"
  },
  {
    "symbol": "DLF.BSE",
    "name": "DLF Limited"
  },
  {
    "symbol": "DLINKINDIA.BSE",
    "name": "D-Link (India) Limited"
  },
  {
    "symbol": "DMART.BSE",
    "name": "Avenue Supermarts Limited"
  },
  {
    "symbol": "DMCC.BSE",
    "name": "DMCC SPECIALITY CHEMICALS LIMITED"
  },
  {
    "symbol": "DNAMEDIA.BSE",
    "name": "Diligent Media Corporation Limited"
  },
  {
    "symbol": "DODLA.BSE",
    "name": "Dodla Dairy Limited"
  },
  {
    "symbol": "DOLATALGO.BSE",
    "name": "Dolat Algotech Limited"
  },
  {
    "symbol": "DOLLAR.BSE",
    "name": "Dollar Industries Limited"
  },
  {
    "symbol": "DOLPHIN.BSE",
    "name": "Dolphin Offshore Enterprises (India) Limited"
  },
  {
    "symbol": "DOMS.BSE",
    "name": "DOMS Industries Limited"
  },
  {
    "symbol": "DONEAR.BSE",
    "name": "Donear Industries Limited"
  },
  {
    "symbol": "DPABHUSHAN.BSE",
    "name": "D. P. Abhushan Limited"
  },
  {
    "symbol": "DPSCLTD.BSE",
    "name": "DPSC Limited"
  },
  {
    "symbol": "DPWIRES.BSE",
    "name": "D P Wires Limited"
  },
  {
    "symbol": "DRCSYSTEMS.BSE",
    "name": "DRC Systems India Limited"
  },
  {
    "symbol": "DREAMFOLKS.BSE",
    "name": "Dreamfolks Services Limited"
  },
  {
    "symbol": "DREDGECORP.BSE",
    "name": "Dredging Corporation of India Limited"
  },
  {
    "symbol": "DRREDDY.BSE",
    "name": "Dr. Reddy's Laboratories Limited"
  },
  {
    "symbol": "DSSL.BSE",
    "name": "Dynacons Systems & Solutions Limited"
  },
  {
    "symbol": "DTIL.BSE",
    "name": "Dhunseri Tea & Industries Limited"
  },
  {
    "symbol": "DUCON.BSE",
    "name": "Ducon Infratechnologies Limited"
  },
  {
    "symbol": "DVL.BSE",
    "name": "Dhunseri Ventures Limited"
  },
  {
    "symbol": "DWARKESH.BSE",
    "name": "Dwarikesh Sugar Industries Limited"
  },
  {
    "symbol": "DYCL.BSE",
    "name": "Dynamic Cables Limited"
  },
  {
    "symbol": "DYNAMATECH.BSE",
    "name": "Dynamatic Technologies Limited"
  },
  {
    "symbol": "DYNPRO.BSE",
    "name": "Dynemic Products Limited"
  },
  {
    "symbol": "E2E.BSE",
    "name": "E2E Networks Limited"
  },
  {
    "symbol": "EASEMYTRIP.BSE",
    "name": "Easy Trip Planners Limited"
  },
  {
    "symbol": "ECLERX.BSE",
    "name": "eClerx Services Limited"
  },
  {
    "symbol": "ECOSMOBLTY.BSE",
    "name": "Ecos (India) Mobility & Hospitality Limited"
  },
  {
    "symbol": "EDELWEISS.BSE",
    "name": "Edelweiss Financial Services Limited"
  },
  {
    "symbol": "EICHERMOT.BSE",
    "name": "Eicher Motors Limited"
  },
  {
    "symbol": "EIDPARRY.BSE",
    "name": "EID Parry India Limited"
  },
  {
    "symbol": "EIEL.BSE",
    "name": "Enviro Infra Engineers Limited"
  },
  {
    "symbol": "EIFFL.BSE",
    "name": "Euro India Fresh Foods Limited"
  },
  {
    "symbol": "EIHAHOTELS.BSE",
    "name": "EIH Associated Hotels Limited"
  },
  {
    "symbol": "EIHOTEL.BSE",
    "name": "EIH Limited"
  },
  {
    "symbol": "EIMCOELECO.BSE",
    "name": "Eimco Elecon (India) Limited"
  },
  {
    "symbol": "EKC.BSE",
    "name": "Everest Kanto Cylinder Limited"
  },
  {
    "symbol": "ELDEHSG.BSE",
    "name": "Eldeco Housing And Industries Limited"
  },
  {
    "symbol": "ELECON.BSE",
    "name": "Elecon Engineering Company Limited"
  },
  {
    "symbol": "ELECTCAST.BSE",
    "name": "Electrosteel Castings Limited"
  },
  {
    "symbol": "ELECTHERM.BSE",
    "name": "Electrotherm (India) Limited"
  },
  {
    "symbol": "ELGIEQUIP.BSE",
    "name": "Elgi Equipments Limited"
  },
  {
    "symbol": "ELGIRUBCO.BSE",
    "name": "Elgi Rubber Company Limited"
  },
  {
    "symbol": "ELIN.BSE",
    "name": "Elin Electronics Limited"
  },
  {
    "symbol": "EMAMILTD.BSE",
    "name": "Emami Limited"
  },
  {
    "symbol": "EMAMIPAP.BSE",
    "name": "Emami Paper Mills Limited"
  },
  {
    "symbol": "EMAMIREAL.BSE",
    "name": "Emami Realty Limited"
  },
  {
    "symbol": "EMBDL.BSE",
    "name": "Embassy Developments Limited"
  },
  {
    "symbol": "EMCURE.BSE",
    "name": "Emcure Pharmaceuticals Limited"
  },
  {
    "symbol": "EMIL.BSE",
    "name": "Electronics Mart India Limited"
  },
  {
    "symbol": "EMKAY.BSE",
    "name": "Emkay Global Financial Services Limited"
  },
  {
    "symbol": "EMMBI.BSE",
    "name": "Emmbi Industries Limited"
  },
  {
    "symbol": "EMSLIMITED.BSE",
    "name": "EMS Limited"
  },
  {
    "symbol": "EMUDHRA.BSE",
    "name": "eMudhra Limited"
  },
  {
    "symbol": "ENDURANCE.BSE",
    "name": "Endurance Technologies Limited"
  },
  {
    "symbol": "ENERGYDEV.BSE",
    "name": "Energy Development Company Limited"
  },
  {
    "symbol": "ENGINERSIN.BSE",
    "name": "Engineers India Limited"
  },
  {
    "symbol": "ENIL.BSE",
    "name": "Entertainment Network (India) Limited"
  },
  {
    "symbol": "ENTERO.BSE",
    "name": "Entero Healthcare Solutions Limited"
  },
  {
    "symbol": "EPACK.BSE",
    "name": "EPACK Durable Limited"
  },
  {
    "symbol": "EPIGRAL.BSE",
    "name": "Epigral Limited"
  },
  {
    "symbol": "EPL.BSE",
    "name": "EPL Limited"
  },
  {
    "symbol": "EQUIPPP.BSE",
    "name": "Equippp Social Impact Technologies Limited"
  },
  {
    "symbol": "EQUITASBNK.BSE",
    "name": "Equitas Small Finance Bank Limited"
  },
  {
    "symbol": "ERIS.BSE",
    "name": "Eris Lifesciences Limited"
  },
  {
    "symbol": "ESABINDIA.BSE",
    "name": "Esab India Limited"
  },
  {
    "symbol": "ESAFSFB.BSE",
    "name": "ESAF Small Finance Bank Limited"
  },
  {
    "symbol": "ESCORTS.BSE",
    "name": "Escorts Kubota Limited"
  },
  {
    "symbol": "ESSARSHPNG.BSE",
    "name": "Essar Shipping Limited"
  },
  {
    "symbol": "ESSENTIA.BSE",
    "name": "Integra Essentia Limited"
  },
  {
    "symbol": "ESTER.BSE",
    "name": "Ester Industries Limited"
  },
  {
    "symbol": "ETERNAL.BSE",
    "name": "ETERNAL LIMITED"
  },
  {
    "symbol": "ETHOSLTD.BSE",
    "name": "Ethos Limited"
  },
  {
    "symbol": "EUREKAFORB.BSE",
    "name": "Eureka Forbes Limited"
  },
  {
    "symbol": "EUROTEXIND.BSE",
    "name": "Eurotex Industries and Exports Limited"
  },
  {
    "symbol": "EVEREADY.BSE",
    "name": "Eveready Industries India Limited"
  },
  {
    "symbol": "EVERESTIND.BSE",
    "name": "Everest Industries Limited"
  },
  {
    "symbol": "EXCEL.BSE",
    "name": "Excel Realty N Infra Limited"
  },
  {
    "symbol": "EXCELINDUS.BSE",
    "name": "Excel Industries Limited"
  },
  {
    "symbol": "EXICOM.BSE",
    "name": "Exicom Tele-Systems Limited"
  },
  {
    "symbol": "EXIDEIND.BSE",
    "name": "Exide Industries Limited"
  },
  {
    "symbol": "EXPLEOSOL.BSE",
    "name": "Expleo Solutions Limited"
  },
  {
    "symbol": "EXXARO.BSE",
    "name": "Exxaro Tiles Limited"
  },
  {
    "symbol": "FACT.BSE",
    "name": "Fertilizers and Chemicals Travancore Limited"
  },
  {
    "symbol": "FAIRCHEMOR.BSE",
    "name": "Fairchem Organics Limited"
  },
  {
    "symbol": "FAZE3Q.BSE",
    "name": "Faze Three Limited"
  },
  {
    "symbol": "FCL.BSE",
    "name": "Fineotex Chemical Limited"
  },
  {
    "symbol": "FCSSOFT.BSE",
    "name": "FCS Software Solutions Limited"
  },
  {
    "symbol": "FDC.BSE",
    "name": "FDC Limited"
  },
  {
    "symbol": "FEDERALBNK.BSE",
    "name": "The Federal Bank  Limited"
  },
  {
    "symbol": "FEDFINA.BSE",
    "name": "Fedbank Financial Services Limited"
  },
  {
    "symbol": "FEL.BSE",
    "name": "Future Enterprises Limited"
  },
  {
    "symbol": "FELDVR.BSE",
    "name": "Future Enterprises Limited"
  },
  {
    "symbol": "FIBERWEB.BSE",
    "name": "Fiberweb (India) Limited"
  },
  {
    "symbol": "FIEMIND.BSE",
    "name": "Fiem Industries Limited"
  },
  {
    "symbol": "FILATEX.BSE",
    "name": "Filatex India Limited"
  },
  {
    "symbol": "FILATFASH.BSE",
    "name": "Filatex Fashions Limited"
  },
  {
    "symbol": "FINCABLES.BSE",
    "name": "Finolex Cables Limited"
  },
  {
    "symbol": "FINEORG.BSE",
    "name": "Fine Organic Industries Limited"
  },
  {
    "symbol": "FINOPB.BSE",
    "name": "Fino Payments Bank Limited"
  },
  {
    "symbol": "FINPIPE.BSE",
    "name": "Finolex Industries Limited"
  },
  {
    "symbol": "FIRSTCRY.BSE",
    "name": "Brainbees Solutions Limited"
  },
  {
    "symbol": "FIVESTAR.BSE",
    "name": "Five-Star Business Finance Limited"
  },
  {
    "symbol": "FLAIR.BSE",
    "name": "Flair Writing Industries Limited"
  },
  {
    "symbol": "FLEXITUFF.BSE",
    "name": "Flexituff Ventures International Limited"
  },
  {
    "symbol": "FLUOROCHEM.BSE",
    "name": "Gujarat Fluorochemicals Limited"
  },
  {
    "symbol": "FMGOETZE.BSE",
    "name": "Federal-Mogul Goetze (India) Limited."
  },
  {
    "symbol": "FMNL.BSE",
    "name": "Future Market Networks Limited"
  },
  {
    "symbol": "FOCUS.BSE",
    "name": "Focus Lighting and Fixtures Limited"
  },
  {
    "symbol": "FOODSIN.BSE",
    "name": "Foods & Inns Limited"
  },
  {
    "symbol": "FORCEMOT.BSE",
    "name": "FORCE MOTORS LTD"
  },
  {
    "symbol": "FORTIS.BSE",
    "name": "Fortis Healthcare Limited"
  },
  {
    "symbol": "FOSECOIND.BSE",
    "name": "Foseco India Limited"
  },
  {
    "symbol": "FSC.BSE",
    "name": "Future Supply Chain Solutions Limited"
  },
  {
    "symbol": "FSL.BSE",
    "name": "Firstsource Solutions Limited"
  },
  {
    "symbol": "FUSION.BSE",
    "name": "Fusion Finance Limited"
  },
  {
    "symbol": "GABRIEL.BSE",
    "name": "Gabriel India Limited"
  },
  {
    "symbol": "GAEL.BSE",
    "name": "Gujarat Ambuja Exports Limited"
  },
  {
    "symbol": "GAIL.BSE",
    "name": "GAIL (India) Limited"
  },
  {
    "symbol": "GALAPREC.BSE",
    "name": "Gala Precision Engineering Limited"
  },
  {
    "symbol": "GALAXYSURF.BSE",
    "name": "Galaxy Surfactants Limited"
  },
  {
    "symbol": "GALLANTT.BSE",
    "name": "Gallantt Ispat Limited"
  },
  {
    "symbol": "GANDHAR.BSE",
    "name": "Gandhar Oil Refinery (India) Limited"
  },
  {
    "symbol": "GANDHITUBE.BSE",
    "name": "Gandhi Special Tubes Limited"
  },
  {
    "symbol": "GANECOS.BSE",
    "name": "Ganesha Ecosphere Limited"
  },
  {
    "symbol": "GANESHBE.BSE",
    "name": "Ganesh Benzoplast Limited"
  },
  {
    "symbol": "GANESHHOUC.BSE",
    "name": "Ganesh Housing Corporation Limited"
  },
  {
    "symbol": "GANGAFORGE.BSE",
    "name": "Ganga Forging Limited"
  },
  {
    "symbol": "GANGESSECU.BSE",
    "name": "Ganges Securities Limited"
  },
  {
    "symbol": "GARFIBRES.BSE",
    "name": "Garware Technical Fibres Limited"
  },
  {
    "symbol": "GARUDA.BSE",
    "name": "Garuda Construction and Engineering Limited"
  },
  {
    "symbol": "GATECH.BSE",
    "name": "GACM Technologies Limited"
  },
  {
    "symbol": "GATECHDVR.BSE",
    "name": "GACM Technologies Limited"
  },
  {
    "symbol": "GATEWAY.BSE",
    "name": "Gateway Distriparks Limited"
  },
  {
    "symbol": "GAYAHWS.BSE",
    "name": "Gayatri Highways Limited"
  },
  {
    "symbol": "GEECEE.BSE",
    "name": "GeeCee Ventures Limited"
  },
  {
    "symbol": "GEEKAYWIRE.BSE",
    "name": "Geekay Wires Limited"
  },
  {
    "symbol": "GENCON.BSE",
    "name": "Generic Engineering Construction and Projects Limited"
  },
  {
    "symbol": "GENESYS.BSE",
    "name": "Genesys International Corporation Limited"
  },
  {
    "symbol": "GENSOL.BSE",
    "name": "Gensol Engineering Limited"
  },
  {
    "symbol": "GENUSPAPER.BSE",
    "name": "Genus Paper & Boards Limited"
  },
  {
    "symbol": "GENUSPOWER.BSE",
    "name": "Genus Power Infrastructures Limited"
  },
  {
    "symbol": "GEOJITFSL.BSE",
    "name": "Geojit Financial Services Limited"
  },
  {
    "symbol": "GEPIL.BSE",
    "name": "GE Power India Limited"
  },
  {
    "symbol": "GESHIP.BSE",
    "name": "The Great Eastern Shipping Company Limited"
  },
  {
    "symbol": "GFLLIMITED.BSE",
    "name": "GFL Limited"
  },
  {
    "symbol": "GHCL.BSE",
    "name": "GHCL Limited"
  },
  {
    "symbol": "GHCLTEXTIL.BSE",
    "name": "GHCL Textiles Limited"
  },
  {
    "symbol": "GICHSGFIN.BSE",
    "name": "GIC Housing Finance Limited"
  },
  {
    "symbol": "GICRE.BSE",
    "name": "General Insurance Corporation of India"
  },
  {
    "symbol": "GILLANDERS.BSE",
    "name": "Gillanders Arbuthnot & Company Limited"
  },
  {
    "symbol": "GILLETTE.BSE",
    "name": "Gillette India Limited"
  },
  {
    "symbol": "GINNIFILA.BSE",
    "name": "Ginni Filaments Limited"
  },
  {
    "symbol": "GIPCL.BSE",
    "name": "Gujarat Industries Power Company Limited"
  },
  {
    "symbol": "GKWLIMITED.BSE",
    "name": "GKW Limited"
  },
  {
    "symbol": "GLAND.BSE",
    "name": "Gland Pharma Limited"
  },
  {
    "symbol": "GLAXO.BSE",
    "name": "GlaxoSmithKline Pharmaceuticals Limited"
  },
  {
    "symbol": "GLENMARK.BSE",
    "name": "Glenmark Pharmaceuticals Limited"
  },
  {
    "symbol": "GLFL.BSE",
    "name": "Gujarat Lease Financing Limited"
  },
  {
    "symbol": "GLOBAL.BSE",
    "name": "Global Education Limited"
  },
  {
    "symbol": "GLOBALE.BSE",
    "name": "Globale Tessile Limited"
  },
  {
    "symbol": "GLOBALVECT.BSE",
    "name": "Global Vectra Helicorp Limited"
  },
  {
    "symbol": "GLOBE.BSE",
    "name": "Globe Textiles (India) Limited"
  },
  {
    "symbol": "GLOBUSSPR.BSE",
    "name": "Globus Spirits Limited"
  },
  {
    "symbol": "GLOSTERLTD.BSE",
    "name": "Gloster Limited"
  },
  {
    "symbol": "GMBREW.BSE",
    "name": "GM Breweries Limited"
  },
  {
    "symbol": "GMDCLTD.BSE",
    "name": "Gujarat Mineral Development Corporation Limited"
  },
  {
    "symbol": "GMMPFAUDLR.BSE",
    "name": "GMM Pfaudler Limited"
  },
  {
    "symbol": "GMRAIRPORT.BSE",
    "name": "GMR AIRPORTS LIMITED"
  },
  {
    "symbol": "GMRP&UI.BSE",
    "name": "GMR Power and Urban Infra Limited"
  },
  {
    "symbol": "GNA.BSE",
    "name": "GNA Axles Limited"
  },
  {
    "symbol": "GNFC.BSE",
    "name": "Gujarat Narmada Valley Fertilizers and Chemicals Limited"
  },
  {
    "symbol": "GOACARBON.BSE",
    "name": "Goa Carbon Limited"
  },
  {
    "symbol": "GOCLCORP.BSE",
    "name": "GOCL Corporation Limited"
  },
  {
    "symbol": "GOCOLORS.BSE",
    "name": "Go Fashion (India) Limited"
  },
  {
    "symbol": "GODAVARIB.BSE",
    "name": "Godavari Biorefineries Limited"
  },
  {
    "symbol": "GODFRYPHLP.BSE",
    "name": "Godfrey Phillips India Limited"
  },
  {
    "symbol": "GODHA.BSE",
    "name": "Godha Cabcon & Insulation Limited"
  },
  {
    "symbol": "GODIGIT.BSE",
    "name": "Go Digit General Insurance Limited"
  },
  {
    "symbol": "GODREJAGRO.BSE",
    "name": "Godrej Agrovet Limited"
  },
  {
    "symbol": "GODREJCP.BSE",
    "name": "Godrej Consumer Products Limited"
  },
  {
    "symbol": "GODREJIND.BSE",
    "name": "Godrej Industries Limited"
  },
  {
    "symbol": "GODREJPROP.BSE",
    "name": "Godrej Properties Limited"
  },
  {
    "symbol": "GOENKA.BSE",
    "name": "Goenka Diamond and Jewels Limited"
  },
  {
    "symbol": "GOKEX.BSE",
    "name": "Gokaldas Exports Limited"
  },
  {
    "symbol": "GOKUL.BSE",
    "name": "Gokul Refoils and Solvent Limited"
  },
  {
    "symbol": "GOKULAGRO.BSE",
    "name": "Gokul Agro Resources Limited"
  },
  {
    "symbol": "GOLDENTOBC.BSE",
    "name": "Golden Tobacco Limited"
  },
  {
    "symbol": "GOLDIAM.BSE",
    "name": "Goldiam International Limited"
  },
  {
    "symbol": "GOLDTECH.BSE",
    "name": "AION-TECH SOLUTIONS LIMITED"
  },
  {
    "symbol": "GOODLUCK.BSE",
    "name": "Goodluck India Limited"
  },
  {
    "symbol": "GOPAL.BSE",
    "name": "Gopal Snacks Limited"
  },
  {
    "symbol": "GOYALALUM.BSE",
    "name": "Goyal Aluminiums Limited"
  },
  {
    "symbol": "GPIL.BSE",
    "name": "Godawari Power And Ispat limited"
  },
  {
    "symbol": "GPPL.BSE",
    "name": "Gujarat Pipavav Port Limited"
  },
  {
    "symbol": "GPTHEALTH.BSE",
    "name": "GPT Healthcare Limited"
  },
  {
    "symbol": "GPTINFRA.BSE",
    "name": "GPT Infraprojects Limited"
  },
  {
    "symbol": "GRANULES.BSE",
    "name": "Granules India Limited"
  },
  {
    "symbol": "GRAPHITE.BSE",
    "name": "Graphite India Limited"
  },
  {
    "symbol": "GRASIM.BSE",
    "name": "Grasim Industries Limited"
  },
  {
    "symbol": "GRAVITA.BSE",
    "name": "Gravita India Limited"
  },
  {
    "symbol": "GREAVESCOT.BSE",
    "name": "Greaves Cotton Limited"
  },
  {
    "symbol": "GREENLAM.BSE",
    "name": "Greenlam Industries Limited"
  },
  {
    "symbol": "GREENPANEL.BSE",
    "name": "Greenpanel Industries Limited"
  },
  {
    "symbol": "GREENPLY.BSE",
    "name": "Greenply Industries Limited"
  },
  {
    "symbol": "GREENPOWER.BSE",
    "name": "Orient Green Power Company Limited"
  },
  {
    "symbol": "GRINDWELL.BSE",
    "name": "Grindwell Norton Limited"
  },
  {
    "symbol": "GRINFRA.BSE",
    "name": "G R Infraprojects Limited"
  },
  {
    "symbol": "GRMOVER.BSE",
    "name": "GRM Overseas Limited"
  },
  {
    "symbol": "GROBTEA.BSE",
    "name": "The Grob Tea Company Limited"
  },
  {
    "symbol": "GRPLTD.BSE",
    "name": "GRP Limited"
  },
  {
    "symbol": "GRSE.BSE",
    "name": "Garden Reach Shipbuilders & Engineers Limited"
  },
  {
    "symbol": "GRWRHITECH.BSE",
    "name": "Garware Hi-Tech Films Limited"
  },
  {
    "symbol": "GSFC.BSE",
    "name": "Gujarat State Fertilizers & Chemicals Limited"
  },
  {
    "symbol": "GSLSU.BSE",
    "name": "Global Surfaces Limited"
  },
  {
    "symbol": "GSPL.BSE",
    "name": "Gujarat State Petronet Limited"
  },
  {
    "symbol": "GSS.BSE",
    "name": "GSS Infotech Limited"
  },
  {
    "symbol": "GTECJAINX.BSE",
    "name": "G-TEC JAINX EDUCATION LIMITED"
  },
  {
    "symbol": "GTL.BSE",
    "name": "GTL Limited"
  },
  {
    "symbol": "GTLINFRA.BSE",
    "name": "GTL Infrastructure Limited"
  },
  {
    "symbol": "GTPL.BSE",
    "name": "GTPL Hathway Limited"
  },
  {
    "symbol": "GUFICBIO.BSE",
    "name": "Gufic Biosciences Limited"
  },
  {
    "symbol": "GUJALKALI.BSE",
    "name": "Gujarat Alkalies and Chemicals Limited"
  },
  {
    "symbol": "GUJAPOLLO.BSE",
    "name": "Gujarat Apollo Industries Limited"
  },
  {
    "symbol": "GUJGASLTD.BSE",
    "name": "Gujarat Gas Limited"
  },
  {
    "symbol": "GUJRAFFIA.BSE",
    "name": "Gujarat Raffia Industries Limited"
  },
  {
    "symbol": "GUJTHEM.BSE",
    "name": "Gujarat Themis Biosyn Limited"
  },
  {
    "symbol": "GULFOILLUB.BSE",
    "name": "Gulf Oil Lubricants India Limited"
  },
  {
    "symbol": "GULFPETRO.BSE",
    "name": "GP Petroleums Limited"
  },
  {
    "symbol": "GULPOLY.BSE",
    "name": "Gulshan Polyols Limited"
  },
  {
    "symbol": "GVKPIL.BSE",
    "name": "GVK Power & Infrastructure Limited"
  },
  {
    "symbol": "GVPTECH.BSE",
    "name": "GVP Infotech Limited"
  },
  {
    "symbol": "GVT&D.BSE",
    "name": "GE Vernova T&D India Limited"
  },
  {
    "symbol": "HAL.BSE",
    "name": "Hindustan Aeronautics Limited"
  },
  {
    "symbol": "HAPPSTMNDS.BSE",
    "name": "Happiest Minds Technologies Limited"
  },
  {
    "symbol": "HAPPYFORGE.BSE",
    "name": "Happy Forgings Limited"
  },
  {
    "symbol": "HARDWYN.BSE",
    "name": "Hardwyn India Limited"
  },
  {
    "symbol": "HARIOMPIPE.BSE",
    "name": "Hariom Pipe Industries Limited"
  },
  {
    "symbol": "HARRMALAYA.BSE",
    "name": "Harrisons  Malayalam Limited"
  },
  {
    "symbol": "HARSHA.BSE",
    "name": "Harsha Engineers International Limited"
  },
  {
    "symbol": "HATHWAY.BSE",
    "name": "Hathway Cable & Datacom Limited"
  },
  {
    "symbol": "HATSUN.BSE",
    "name": "Hatsun Agro Product Limited"
  },
  {
    "symbol": "HAVELLS.BSE",
    "name": "Havells India Limited"
  },
  {
    "symbol": "HAVISHA.BSE",
    "name": "Sri Havisha Hospitality and Infrastructure Limited"
  },
  {
    "symbol": "HBLENGINE.BSE",
    "name": "HBL Engineering Limited"
  },
  {
    "symbol": "HBSL.BSE",
    "name": "HB Stockholdings Limited"
  },
  {
    "symbol": "HCC.BSE",
    "name": "Hindustan Construction Company Limited"
  },
  {
    "symbol": "HCG.BSE",
    "name": "Healthcare Global Enterprises Limited"
  },
  {
    "symbol": "HCL-INSYS.BSE",
    "name": "HCL Infosystems Limited"
  },
  {
    "symbol": "HCLTECH.BSE",
    "name": "HCL Technologies Limited"
  },
  {
    "symbol": "HDFCAMC.BSE",
    "name": "HDFC Asset Management Company Limited"
  },
  {
    "symbol": "HDFCBANK.BSE",
    "name": "HDFC Bank Limited"
  },
  {
    "symbol": "HDFCLIFE.BSE",
    "name": "HDFC Life Insurance Company Limited"
  },
  {
    "symbol": "HEADSUP.BSE",
    "name": "Heads UP Ventures Limited"
  },
  {
    "symbol": "HECPROJECT.BSE",
    "name": "HEC Infra Projects Limited"
  },
  {
    "symbol": "HEG.BSE",
    "name": "HEG Limited"
  },
  {
    "symbol": "HEIDELBERG.BSE",
    "name": "HeidelbergCement India Limited"
  },
  {
    "symbol": "HEMIPROP.BSE",
    "name": "Hemisphere Properties India Limited"
  },
  {
    "symbol": "HERANBA.BSE",
    "name": "Heranba Industries Limited"
  },
  {
    "symbol": "HERCULES.BSE",
    "name": "Hercules Hoists Limited"
  },
  {
    "symbol": "HERITGFOOD.BSE",
    "name": "Heritage Foods Limited"
  },
  {
    "symbol": "HEROMOTOCO.BSE",
    "name": "Hero MotoCorp Limited"
  },
  {
    "symbol": "HESTERBIO.BSE",
    "name": "Hester Biosciences Limited"
  },
  {
    "symbol": "HEUBACHIND.BSE",
    "name": "Heubach Colorants India Limited"
  },
  {
    "symbol": "HEXATRADEX.BSE",
    "name": "Hexa Tradex Limited"
  },
  {
    "symbol": "HEXT.BSE",
    "name": "Hexaware Technologies Limited"
  },
  {
    "symbol": "HFCL.BSE",
    "name": "HFCL Limited"
  },
  {
    "symbol": "HGINFRA.BSE",
    "name": "H.G. Infra Engineering Limited"
  },
  {
    "symbol": "HGS.BSE",
    "name": "Hinduja Global Solutions Limited"
  },
  {
    "symbol": "HIKAL.BSE",
    "name": "Hikal Limited"
  },
  {
    "symbol": "HILTON.BSE",
    "name": "Hilton Metal Forging Limited"
  },
  {
    "symbol": "HIMATSEIDE.BSE",
    "name": "Himatsingka Seide Limited"
  },
  {
    "symbol": "HINDALCO.BSE",
    "name": "Hindalco Industries Limited"
  },
  {
    "symbol": "HINDCOMPOS.BSE",
    "name": "Hindustan Composites Limited"
  },
  {
    "symbol": "HINDCON.BSE",
    "name": "Hindcon Chemicals Limited"
  },
  {
    "symbol": "HINDCOPPER.BSE",
    "name": "Hindustan Copper Limited"
  },
  {
    "symbol": "HINDMOTORS.BSE",
    "name": "Hindustan Motors Limited"
  },
  {
    "symbol": "HINDNATGLS.BSE",
    "name": "Hindusthan National Glass & Industries Limited"
  },
  {
    "symbol": "HINDOILEXP.BSE",
    "name": "Hindustan Oil Exploration Company Limited"
  },
  {
    "symbol": "HINDPETRO.BSE",
    "name": "Hindustan Petroleum Corporation Limited"
  },
  {
    "symbol": "HINDUNILVR.BSE",
    "name": "Hindustan Unilever Limited"
  },
  {
    "symbol": "HINDWAREAP.BSE",
    "name": "Hindware Home Innovation Limited"
  },
  {
    "symbol": "HINDZINC.BSE",
    "name": "Hindustan Zinc Limited"
  },
  {
    "symbol": "HIRECT.BSE",
    "name": "Hind Rectifiers Limited"
  },
  {
    "symbol": "HISARMETAL.BSE",
    "name": "Hisar Metal Industries Limited"
  },
  {
    "symbol": "HITECH.BSE",
    "name": "Hi-Tech Pipes Limited"
  },
  {
    "symbol": "HITECHCORP.BSE",
    "name": "Hitech Corporation Limited"
  },
  {
    "symbol": "HITECHGEAR.BSE",
    "name": "The Hi-Tech Gears Limited"
  },
  {
    "symbol": "HLEGLAS.BSE",
    "name": "HLE Glascoat Limited"
  },
  {
    "symbol": "HLVLTD.BSE",
    "name": "HLV LIMITED"
  },
  {
    "symbol": "HMAAGRO.BSE",
    "name": "HMA Agro Industries Limited"
  },
  {
    "symbol": "HMT.BSE",
    "name": "HMT Limited"
  },
  {
    "symbol": "HMVL.BSE",
    "name": "Hindustan Media Ventures Limited"
  },
  {
    "symbol": "HNDFDS.BSE",
    "name": "Hindustan Foods Limited"
  },
  {
    "symbol": "HOMEFIRST.BSE",
    "name": "Home First Finance Company India Limited"
  },
  {
    "symbol": "HONASA.BSE",
    "name": "Honasa Consumer Limited"
  },
  {
    "symbol": "HONAUT.BSE",
    "name": "Honeywell Automation India Limited"
  },
  {
    "symbol": "HONDAPOWER.BSE",
    "name": "Honda India Power Products Limited"
  },
  {
    "symbol": "HOVS.BSE",
    "name": "HOV Services Limited"
  },
  {
    "symbol": "HPAL.BSE",
    "name": "HP Adhesives Limited"
  },
  {
    "symbol": "HPIL.BSE",
    "name": "Hindprakash Industries Limited"
  },
  {
    "symbol": "HPL.BSE",
    "name": "HPL Electric & Power Limited"
  },
  {
    "symbol": "HSCL.BSE",
    "name": "Himadri Speciality Chemical Limited"
  },
  {
    "symbol": "HTMEDIA.BSE",
    "name": "HT Media Limited"
  },
  {
    "symbol": "HUBTOWN.BSE",
    "name": "Hubtown Limited"
  },
  {
    "symbol": "HUDCO.BSE",
    "name": "Housing & Urban Development Corporation Limited"
  },
  {
    "symbol": "HUHTAMAKI.BSE",
    "name": "Huhtamaki India Limited"
  },
  {
    "symbol": "HYBRIDFIN.BSE",
    "name": "Hybrid Financial Services Limited"
  },
  {
    "symbol": "HYUNDAI.BSE",
    "name": "Hyundai Motor India Limited"
  },
  {
    "symbol": "ICDSLTD.BSE",
    "name": "ICDS Limited"
  },
  {
    "symbol": "ICEMAKE.BSE",
    "name": "Ice Make Refrigeration Limited"
  },
  {
    "symbol": "ICICIBANK.BSE",
    "name": "ICICI Bank Limited"
  },
  {
    "symbol": "ICICIGI.BSE",
    "name": "ICICI Lombard General Insurance Company Limited"
  },
  {
    "symbol": "ICICIPRULI.BSE",
    "name": "ICICI Prudential Life Insurance Company Limited"
  },
  {
    "symbol": "ICIL.BSE",
    "name": "Indo Count Industries Limited"
  },
  {
    "symbol": "ICRA.BSE",
    "name": "ICRA Limited"
  },
  {
    "symbol": "IDBI.BSE",
    "name": "IDBI Bank Limited"
  },
  {
    "symbol": "IDEA.BSE",
    "name": "Vodafone Idea Limited"
  },
  {
    "symbol": "IDEAFORGE.BSE",
    "name": "Ideaforge Technology Limited"
  },
  {
    "symbol": "IDFCFIRSTB.BSE",
    "name": "IDFC First Bank Limited"
  },
  {
    "symbol": "IEL.BSE",
    "name": "Indiabulls Enterprises Limited"
  },
  {
    "symbol": "IEX.BSE",
    "name": "Indian Energy Exchange Limited"
  },
  {
    "symbol": "IFBAGRO.BSE",
    "name": "IFB Agro Industries Limited"
  },
  {
    "symbol": "IFBIND.BSE",
    "name": "IFB Industries Limited"
  },
  {
    "symbol": "IFCI.BSE",
    "name": "IFCI Limited"
  },
  {
    "symbol": "IFGLEXPOR.BSE",
    "name": "IFGL Refractories Limited"
  },
  {
    "symbol": "IGARASHI.BSE",
    "name": "Igarashi Motors India Limited"
  },
  {
    "symbol": "IGIL.BSE",
    "name": "International Gemmological Institute (India) Limited"
  },
  {
    "symbol": "IGL.BSE",
    "name": "Indraprastha Gas Limited"
  },
  {
    "symbol": "IGPL.BSE",
    "name": "IG Petrochemicals Limited"
  },
  {
    "symbol": "IIFL.BSE",
    "name": "IIFL Finance Limited"
  },
  {
    "symbol": "IIFLCAPS.BSE",
    "name": "IIFL Capital Services Limited"
  },
  {
    "symbol": "IITL.BSE",
    "name": "Industrial Investment Trust Limited"
  },
  {
    "symbol": "IKIO.BSE",
    "name": "IKIO Technologies Limited"
  },
  {
    "symbol": "IKS.BSE",
    "name": "Inventurus Knowledge Solutions Limited"
  },
  {
    "symbol": "IL&FSENGG.BSE",
    "name": "IL&FS Engineering and Construction Company Limited"
  },
  {
    "symbol": "IL&FSTRANS.BSE",
    "name": "IL&FS Transportation Networks Limited"
  },
  {
    "symbol": "IMAGICAA.BSE",
    "name": "Imagicaaworld Entertainment Limited"
  },
  {
    "symbol": "IMFA.BSE",
    "name": "Indian Metals & Ferro Alloys Limited"
  },
  {
    "symbol": "IMPAL.BSE",
    "name": "India Motor Parts and Accessories Limited"
  },
  {
    "symbol": "IMPEXFERRO.BSE",
    "name": "Impex Ferro Tech Limited"
  },
  {
    "symbol": "INCREDIBLE.BSE",
    "name": "INCREDIBLE INDUSTRIES LIMITED"
  },
  {
    "symbol": "INDBANK.BSE",
    "name": "Indbank Merchant Banking Services Limited"
  },
  {
    "symbol": "INDGN.BSE",
    "name": "Indegene Limited"
  },
  {
    "symbol": "INDHOTEL.BSE",
    "name": "The Indian Hotels Company Limited"
  },
  {
    "symbol": "INDIACEM.BSE",
    "name": "The India Cements Limited"
  },
  {
    "symbol": "INDIAGLYCO.BSE",
    "name": "India Glycols Limited"
  },
  {
    "symbol": "INDIAMART.BSE",
    "name": "Indiamart Intermesh Limited"
  },
  {
    "symbol": "INDIANB.BSE",
    "name": "Indian Bank"
  },
  {
    "symbol": "INDIANCARD.BSE",
    "name": "Indian Card Clothing Company Limited"
  },
  {
    "symbol": "INDIANHUME.BSE",
    "name": "Indian Hume Pipe Company Limited"
  },
  {
    "symbol": "INDIASHLTR.BSE",
    "name": "India Shelter Finance Corporation Limited"
  },
  {
    "symbol": "INDIGO.BSE",
    "name": "InterGlobe Aviation Limited"
  },
  {
    "symbol": "INDIGOPNTS.BSE",
    "name": "Indigo Paints Limited"
  },
  {
    "symbol": "INDNIPPON.BSE",
    "name": "India Nippon Electricals Limited"
  },
  {
    "symbol": "INDOAMIN.BSE",
    "name": "Indo Amines Limited"
  },
  {
    "symbol": "INDOBORAX.BSE",
    "name": "Indo Borax & Chemicals Limited"
  },
  {
    "symbol": "INDOCO.BSE",
    "name": "Indoco Remedies Limited"
  },
  {
    "symbol": "INDOFARM.BSE",
    "name": "Indo Farm Equipment Limited"
  },
  {
    "symbol": "INDORAMA.BSE",
    "name": "Indo Rama Synthetics (India) Limited"
  },
  {
    "symbol": "INDOSTAR.BSE",
    "name": "IndoStar Capital Finance Limited"
  },
  {
    "symbol": "INDOTECH.BSE",
    "name": "Indo Tech Transformers Limited"
  },
  {
    "symbol": "INDOTHAI.BSE",
    "name": "Indo Thai Securities Limited"
  },
  {
    "symbol": "INDOUS.BSE",
    "name": "Indo Us Biotech Limited"
  },
  {
    "symbol": "INDOWIND.BSE",
    "name": "Indowind Energy Limited"
  },
  {
    "symbol": "INDRAMEDCO.BSE",
    "name": "Indraprastha Medical Corporation Limited"
  },
  {
    "symbol": "INDSWFTLAB.BSE",
    "name": "Ind-Swift Laboratories Limited"
  },
  {
    "symbol": "INDSWFTLTD.BSE",
    "name": "Ind-Swift Limited"
  },
  {
    "symbol": "INDTERRAIN.BSE",
    "name": "Indian Terrain Fashions Limited"
  },
  {
    "symbol": "INDUSINDBK.BSE",
    "name": "IndusInd Bank Limited"
  },
  {
    "symbol": "INDUSTOWER.BSE",
    "name": "Indus Towers Limited"
  },
  {
    "symbol": "INFIBEAM.BSE",
    "name": "Infibeam Avenues Limited"
  },
  {
    "symbol": "INFOBEAN.BSE",
    "name": "InfoBeans Technologies Limited"
  },
  {
    "symbol": "INFOMEDIA.BSE",
    "name": "Infomedia Press Limited"
  },
  {
    "symbol": "INFY.BSE",
    "name": "Infosys Limited"
  },
  {
    "symbol": "INGERRAND.BSE",
    "name": "Ingersoll Rand (India) Limited"
  },
  {
    "symbol": "INNOVACAP.BSE",
    "name": "Innova Captab Limited"
  },
  {
    "symbol": "INNOVANA.BSE",
    "name": "Innovana Thinklabs Limited"
  },
  {
    "symbol": "INOXGREEN.BSE",
    "name": "Inox Green Energy Services Limited"
  },
  {
    "symbol": "INOXINDIA.BSE",
    "name": "INOX India Limited"
  },
  {
    "symbol": "INOXWIND.BSE",
    "name": "Inox Wind Limited"
  },
  {
    "symbol": "INSECTICID.BSE",
    "name": "Insecticides (India) Limited"
  },
  {
    "symbol": "INSPIRISYS.BSE",
    "name": "Inspirisys Solutions Limited"
  },
  {
    "symbol": "INTELLECT.BSE",
    "name": "Intellect Design Arena Limited"
  },
  {
    "symbol": "INTENTECH.BSE",
    "name": "Intense Technologies Limited"
  },
  {
    "symbol": "INTERARCH.BSE",
    "name": "Interarch Building Products Limited"
  },
  {
    "symbol": "INTLCONV.BSE",
    "name": "International Conveyors Limited"
  },
  {
    "symbol": "INVENTURE.BSE",
    "name": "Inventure Growth & Securities Limited"
  },
  {
    "symbol": "IOB.BSE",
    "name": "Indian Overseas Bank"
  },
  {
    "symbol": "IOC.BSE",
    "name": "Indian Oil Corporation Limited"
  },
  {
    "symbol": "IOLCP.BSE",
    "name": "IOL Chemicals and Pharmaceuticals Limited"
  },
  {
    "symbol": "IONEXCHANG.BSE",
    "name": "ION Exchange (India) Limited"
  },
  {
    "symbol": "IPCALAB.BSE",
    "name": "IPCA Laboratories Limited"
  },
  {
    "symbol": "IPL.BSE",
    "name": "India Pesticides Limited"
  },
  {
    "symbol": "IRB.BSE",
    "name": "IRB Infrastructure Developers Limited"
  },
  {
    "symbol": "IRCON.BSE",
    "name": "Ircon International Limited"
  },
  {
    "symbol": "IRCTC.BSE",
    "name": "Indian Railway Catering And Tourism Corporation Limited"
  },
  {
    "symbol": "IREDA.BSE",
    "name": "Indian Renewable Energy Development Agency Limited"
  },
  {
    "symbol": "IRFC.BSE",
    "name": "Indian Railway Finance Corporation Limited"
  },
  {
    "symbol": "IRIS.BSE",
    "name": "Iris Business Services Limited"
  },
  {
    "symbol": "IRISDOREME.BSE",
    "name": "Iris Clothings Limited"
  },
  {
    "symbol": "IRMENERGY.BSE",
    "name": "IRM Energy Limited"
  },
  {
    "symbol": "ISFT.BSE",
    "name": "Intrasoft Technologies Limited"
  },
  {
    "symbol": "ISGEC.BSE",
    "name": "Isgec Heavy Engineering Limited"
  },
  {
    "symbol": "ISHANCH.BSE",
    "name": "Ishan Dyes and Chemicals Limited"
  },
  {
    "symbol": "ITC.BSE",
    "name": "ITC Limited"
  },
  {
    "symbol": "ITCHOTELS.BSE",
    "name": "ITC Hotels Limited"
  },
  {
    "symbol": "ITDC.BSE",
    "name": "India Tourism Development Corporation Limited"
  },
  {
    "symbol": "ITDCEM.BSE",
    "name": "ITD Cementation India Limited"
  },
  {
    "symbol": "ITI.BSE",
    "name": "ITI Limited"
  },
  {
    "symbol": "IVC.BSE",
    "name": "IL&FS Investment Managers Limited"
  },
  {
    "symbol": "IVP.BSE",
    "name": "IVP Limited"
  },
  {
    "symbol": "IWEL.BSE",
    "name": "Inox Wind Energy Limited"
  },
  {
    "symbol": "IXIGO.BSE",
    "name": "Le Travenues Technology Limited"
  },
  {
    "symbol": "IZMO.BSE",
    "name": "IZMO Limited"
  },
  {
    "symbol": "J&KBANK.BSE",
    "name": "The Jammu & Kashmir Bank Limited"
  },
  {
    "symbol": "JAGRAN.BSE",
    "name": "Jagran Prakashan Limited"
  },
  {
    "symbol": "JAGSNPHARM.BSE",
    "name": "Jagsonpal Pharmaceuticals Limited"
  },
  {
    "symbol": "JAIBALAJI.BSE",
    "name": "Jai Balaji Industries Limited"
  },
  {
    "symbol": "JAICORPLTD.BSE",
    "name": "Jai Corp Limited"
  },
  {
    "symbol": "JAIPURKURT.BSE",
    "name": "Nandani Creation Limited"
  },
  {
    "symbol": "JAMNAAUTO.BSE",
    "name": "Jamna Auto Industries Limited"
  },
  {
    "symbol": "JASH.BSE",
    "name": "Jash Engineering Limited"
  },
  {
    "symbol": "JAYAGROGN.BSE",
    "name": "Jayant Agro Organics Limited"
  },
  {
    "symbol": "JAYBARMARU.BSE",
    "name": "Jay Bharat Maruti Limited"
  },
  {
    "symbol": "JAYNECOIND.BSE",
    "name": "Jayaswal Neco Industries Limited"
  },
  {
    "symbol": "JAYSREETEA.BSE",
    "name": "Jayshree Tea & Industries Limited"
  },
  {
    "symbol": "JBCHEPHARM.BSE",
    "name": "JB Chemicals & Pharmaceuticals Limited"
  },
  {
    "symbol": "JBMA.BSE",
    "name": "JBM Auto Limited"
  },
  {
    "symbol": "JCHAC.BSE",
    "name": "Johnson Controls - Hitachi Air Conditioning India Limited"
  },
  {
    "symbol": "JETFREIGHT.BSE",
    "name": "Jet Freight Logistics Limited"
  },
  {
    "symbol": "JGCHEM.BSE",
    "name": "J.G.Chemicals Limited"
  },
  {
    "symbol": "JHS.BSE",
    "name": "JHS Svendgaard Laboratories Limited"
  },
  {
    "symbol": "JINDALPHOT.BSE",
    "name": "Jindal Photo Limited"
  },
  {
    "symbol": "JINDALPOLY.BSE",
    "name": "Jindal Poly Films Limited"
  },
  {
    "symbol": "JINDALSAW.BSE",
    "name": "Jindal Saw Limited"
  },
  {
    "symbol": "JINDALSTEL.BSE",
    "name": "Jindal Steel & Power Limited"
  },
  {
    "symbol": "JINDRILL.BSE",
    "name": "Jindal Drilling And Industries Limited"
  },
  {
    "symbol": "JINDWORLD.BSE",
    "name": "Jindal Worldwide Limited"
  },
  {
    "symbol": "JIOFIN.BSE",
    "name": "Jio Financial Services Limited"
  },
  {
    "symbol": "JISLDVREQS.BSE",
    "name": "Jain Irrigation Systems Limited"
  },
  {
    "symbol": "JISLJALEQS.BSE",
    "name": "Jain Irrigation Systems Limited"
  },
  {
    "symbol": "JITFINFRA.BSE",
    "name": "JITF Infralogistics Limited"
  },
  {
    "symbol": "JKCEMENT.BSE",
    "name": "JK Cement Limited"
  },
  {
    "symbol": "JKIL.BSE",
    "name": "J.Kumar Infraprojects Limited"
  },
  {
    "symbol": "JKLAKSHMI.BSE",
    "name": "JK Lakshmi Cement Limited"
  },
  {
    "symbol": "JKPAPER.BSE",
    "name": "JK Paper Limited"
  },
  {
    "symbol": "JKTYRE.BSE",
    "name": "JK Tyre & Industries Limited"
  },
  {
    "symbol": "JLHL.BSE",
    "name": "Jupiter Life Line Hospitals Limited"
  },
  {
    "symbol": "JMA.BSE",
    "name": "Jullundur Motor Agency (Delhi) Limited"
  },
  {
    "symbol": "JMFINANCIL.BSE",
    "name": "JM Financial Limited"
  },
  {
    "symbol": "JNKINDIA.BSE",
    "name": "JNK India Limited"
  },
  {
    "symbol": "JOCIL.BSE",
    "name": "Jocil Limited"
  },
  {
    "symbol": "JPOLYINVST.BSE",
    "name": "Jindal Poly Investment and Finance Company Limited"
  },
  {
    "symbol": "JPPOWER.BSE",
    "name": "Jaiprakash Power Ventures Limited"
  },
  {
    "symbol": "JSFB.BSE",
    "name": "Jana Small Finance Bank Limited"
  },
  {
    "symbol": "JSL.BSE",
    "name": "Jindal Stainless Limited"
  },
  {
    "symbol": "JSWENERGY.BSE",
    "name": "JSW Energy Limited"
  },
  {
    "symbol": "JSWHL.BSE",
    "name": "JSW Holdings Limited"
  },
  {
    "symbol": "JSWINFRA.BSE",
    "name": "JSW Infrastructure Limited"
  },
  {
    "symbol": "JSWSTEEL.BSE",
    "name": "JSW Steel Limited"
  },
  {
    "symbol": "JTEKTINDIA.BSE",
    "name": "Jtekt India Limited"
  },
  {
    "symbol": "JTLIND.BSE",
    "name": "JTL INDUSTRIES LIMITED"
  },
  {
    "symbol": "JUBLCPL.BSE",
    "name": "Jubilant Agri and Consumer Products Limited"
  },
  {
    "symbol": "JUBLFOOD.BSE",
    "name": "Jubilant Foodworks Limited"
  },
  {
    "symbol": "JUBLINGREA.BSE",
    "name": "Jubilant Ingrevia Limited"
  },
  {
    "symbol": "JUBLPHARMA.BSE",
    "name": "Jubilant Pharmova Limited"
  },
  {
    "symbol": "JUNIPER.BSE",
    "name": "Juniper Hotels Limited"
  },
  {
    "symbol": "JUSTDIAL.BSE",
    "name": "Just Dial Limited"
  },
  {
    "symbol": "JWL.BSE",
    "name": "Jupiter Wagons Limited"
  },
  {
    "symbol": "JYOTHYLAB.BSE",
    "name": "Jyothy Labs Limited"
  },
  {
    "symbol": "JYOTICNC.BSE",
    "name": "Jyoti CNC Automation Limited"
  },
  {
    "symbol": "JYOTISTRUC.BSE",
    "name": "Jyoti Structures Limited"
  },
  {
    "symbol": "KABRAEXTRU.BSE",
    "name": "Kabra Extrusion Technik Limited"
  },
  {
    "symbol": "KAJARIACER.BSE",
    "name": "Kajaria Ceramics Limited"
  },
  {
    "symbol": "KAKATCEM.BSE",
    "name": "Kakatiya Cement Sugar & Industries Limited"
  },
  {
    "symbol": "KALAMANDIR.BSE",
    "name": "Sai Silks (Kalamandir) Limited"
  },
  {
    "symbol": "KALYANI.BSE",
    "name": "Kalyani Commercials Limited"
  },
  {
    "symbol": "KALYANIFRG.BSE",
    "name": "Kalyani Forge Limited"
  },
  {
    "symbol": "KALYANKJIL.BSE",
    "name": "Kalyan Jewellers India Limited"
  },
  {
    "symbol": "KAMATHOTEL.BSE",
    "name": "Kamat Hotels (I) Limited"
  },
  {
    "symbol": "KAMDHENU.BSE",
    "name": "Kamdhenu Limited"
  },
  {
    "symbol": "KAMOPAINTS.BSE",
    "name": "Kamdhenu Ventures Limited"
  },
  {
    "symbol": "KANANIIND.BSE",
    "name": "Kanani Industries Limited"
  },
  {
    "symbol": "KANORICHEM.BSE",
    "name": "Kanoria Chemicals & Industries Limited"
  },
  {
    "symbol": "KANPRPLA.BSE",
    "name": "Kanpur Plastipack Limited"
  },
  {
    "symbol": "KANSAINER.BSE",
    "name": "Kansai Nerolac Paints Limited"
  },
  {
    "symbol": "KAPSTON.BSE",
    "name": "Kapston Services Limited"
  },
  {
    "symbol": "KARMAENG.BSE",
    "name": "Karma Energy Limited"
  },
  {
    "symbol": "KARURVYSYA.BSE",
    "name": "Karur Vysya Bank Limited"
  },
  {
    "symbol": "KAUSHALYA.BSE",
    "name": "Kaushalya Infrastructure Development Corporation Limited"
  },
  {
    "symbol": "KAVVERITEL.BSE",
    "name": "Kavveri Telecom Products Limited"
  },
  {
    "symbol": "KAYA.BSE",
    "name": "Kaya Limited"
  },
  {
    "symbol": "KAYNES.BSE",
    "name": "Kaynes Technology India Limited"
  },
  {
    "symbol": "KBCGLOBAL.BSE",
    "name": "KBC Global Limited"
  },
  {
    "symbol": "KCP.BSE",
    "name": "KCP Limited"
  },
  {
    "symbol": "KCPSUGIND.BSE",
    "name": "KCP Sugar and Industries Corporation Limited"
  },
  {
    "symbol": "KDDL.BSE",
    "name": "KDDL Limited"
  },
  {
    "symbol": "KEC.BSE",
    "name": "KEC International Limited"
  },
  {
    "symbol": "KECL.BSE",
    "name": "Kirloskar Electric Company Limited"
  },
  {
    "symbol": "KEEPLEARN.BSE",
    "name": "DSJ Keep Learning Limited"
  },
  {
    "symbol": "KEI.BSE",
    "name": "KEI Industries Limited"
  },
  {
    "symbol": "KELLTONTEC.BSE",
    "name": "Kellton Tech Solutions Limited"
  },
  {
    "symbol": "KERNEX.BSE",
    "name": "Kernex Microsystems (India) Limited"
  },
  {
    "symbol": "KESORAMIND.BSE",
    "name": "Kesoram Industries Limited"
  },
  {
    "symbol": "KEYFINSERV.BSE",
    "name": "Keynote Financial Services Limited"
  },
  {
    "symbol": "KFINTECH.BSE",
    "name": "Kfin Technologies Limited"
  },
  {
    "symbol": "KHADIM.BSE",
    "name": "Khadim India Limited"
  },
  {
    "symbol": "KHAICHEM.BSE",
    "name": "Khaitan Chemicals & Fertilizers Limited"
  },
  {
    "symbol": "KHAITANLTD.BSE",
    "name": "Khaitan (India) Limited"
  },
  {
    "symbol": "KHANDSE.BSE",
    "name": "Khandwala Securities Limited"
  },
  {
    "symbol": "KICL.BSE",
    "name": "Kalyani Investment Company Limited"
  },
  {
    "symbol": "KILITCH.BSE",
    "name": "Kilitch Drugs (India) Limited"
  },
  {
    "symbol": "KIMS.BSE",
    "name": "Krishna Institute of Medical Sciences Limited"
  },
  {
    "symbol": "KINGFA.BSE",
    "name": "Kingfa Science & Technology (India) Limited"
  },
  {
    "symbol": "KIOCL.BSE",
    "name": "KIOCL Limited"
  },
  {
    "symbol": "KIRIINDUS.BSE",
    "name": "Kiri Industries Limited"
  },
  {
    "symbol": "KIRLOSBROS.BSE",
    "name": "Kirloskar Brothers Limited"
  },
  {
    "symbol": "KIRLOSENG.BSE",
    "name": "Kirloskar Oil Engines Limited"
  },
  {
    "symbol": "KIRLOSIND.BSE",
    "name": "Kirloskar Industries Limited"
  },
  {
    "symbol": "KIRLPNU.BSE",
    "name": "Kirloskar Pneumatic Company Limited"
  },
  {
    "symbol": "KITEX.BSE",
    "name": "Kitex Garments Limited"
  },
  {
    "symbol": "KKCL.BSE",
    "name": "Kewal Kiran Clothing Limited"
  },
  {
    "symbol": "KMEW.BSE",
    "name": "Knowledge Marine & Engineering Works Limited"
  },
  {
    "symbol": "KMSUGAR.BSE",
    "name": "K.M.Sugar Mills Limited"
  },
  {
    "symbol": "KNRCON.BSE",
    "name": "KNR Constructions Limited"
  },
  {
    "symbol": "KOHINOOR.BSE",
    "name": "Kohinoor Foods Limited"
  },
  {
    "symbol": "KOKUYOCMLN.BSE",
    "name": "Kokuyo Camlin Limited"
  },
  {
    "symbol": "KOLTEPATIL.BSE",
    "name": "Kolte - Patil Developers Limited"
  },
  {
    "symbol": "KOPRAN.BSE",
    "name": "Kopran Limited"
  },
  {
    "symbol": "KOTAKBANK.BSE",
    "name": "Kotak Mahindra Bank Limited"
  },
  {
    "symbol": "KOTARISUG.BSE",
    "name": "Kothari Sugars And Chemicals Limited"
  },
  {
    "symbol": "KOTHARIPET.BSE",
    "name": "Kothari Petrochemicals Limited"
  },
  {
    "symbol": "KOTHARIPRO.BSE",
    "name": "Kothari Products Limited"
  },
  {
    "symbol": "KPEL.BSE",
    "name": "K.P. Energy Limited"
  },
  {
    "symbol": "KPIGREEN.BSE",
    "name": "KPI Green Energy Limited"
  },
  {
    "symbol": "KPIL.BSE",
    "name": "Kalpataru Projects International Limited"
  },
  {
    "symbol": "KPITTECH.BSE",
    "name": "KPIT Technologies Limited"
  },
  {
    "symbol": "KPRMILL.BSE",
    "name": "K.P.R. Mill Limited"
  },
  {
    "symbol": "KRBL.BSE",
    "name": "KRBL Limited"
  },
  {
    "symbol": "KREBSBIO.BSE",
    "name": "Krebs Biochemicals and Industries Limited"
  },
  {
    "symbol": "KRIDHANINF.BSE",
    "name": "Kridhan Infra Limited"
  },
  {
    "symbol": "KRISHANA.BSE",
    "name": "Krishana Phoschem Limited"
  },
  {
    "symbol": "KRITI.BSE",
    "name": "Kriti Industries (India) Limited"
  },
  {
    "symbol": "KRITIKA.BSE",
    "name": "Kritika Wires Limited"
  },
  {
    "symbol": "KRITINUT.BSE",
    "name": "Kriti Nutrients Limited"
  },
  {
    "symbol": "KRN.BSE",
    "name": "KRN Heat Exchanger and Refrigeration Limited"
  },
  {
    "symbol": "KRONOX.BSE",
    "name": "Kronox Lab Sciences Limited"
  },
  {
    "symbol": "KROSS.BSE",
    "name": "Kross Limited"
  },
  {
    "symbol": "KRSNAA.BSE",
    "name": "Krsnaa Diagnostics Limited"
  },
  {
    "symbol": "KRYSTAL.BSE",
    "name": "Krystal Integrated Services Limited"
  },
  {
    "symbol": "KSB.BSE",
    "name": "Ksb Limited"
  },
  {
    "symbol": "KSCL.BSE",
    "name": "Kaveri Seed Company Limited"
  },
  {
    "symbol": "KSHITIJPOL.BSE",
    "name": "Kshitij Polyline Limited"
  },
  {
    "symbol": "KSL.BSE",
    "name": "Kalyani Steels Limited"
  },
  {
    "symbol": "KSOLVES.BSE",
    "name": "Ksolves India Limited"
  },
  {
    "symbol": "KTKBANK.BSE",
    "name": "The Karnataka Bank Limited"
  },
  {
    "symbol": "KUANTUM.BSE",
    "name": "Kuantum Papers Limited"
  },
  {
    "symbol": "LAGNAM.BSE",
    "name": "Lagnam Spintex Limited"
  },
  {
    "symbol": "LAKPRE.BSE",
    "name": "Lakshmi Precision Screws Limited"
  },
  {
    "symbol": "LAL.BSE",
    "name": "Lorenzini Apparels Limited"
  },
  {
    "symbol": "LALPATHLAB.BSE",
    "name": "Dr. Lal Path Labs Ltd."
  },
  {
    "symbol": "LAMBODHARA.BSE",
    "name": "Lambodhara Textiles Limited"
  },
  {
    "symbol": "LANCORHOL.BSE",
    "name": "Lancor Holdings Limited"
  },
  {
    "symbol": "LANDMARK.BSE",
    "name": "Landmark Cars Limited"
  },
  {
    "symbol": "LAOPALA.BSE",
    "name": "La Opala RG Limited"
  },
  {
    "symbol": "LASA.BSE",
    "name": "Lasa Supergenerics Limited"
  },
  {
    "symbol": "LATENTVIEW.BSE",
    "name": "Latent View Analytics Limited"
  },
  {
    "symbol": "LATTEYS.BSE",
    "name": "Latteys Industries Limited"
  },
  {
    "symbol": "LAURUSLABS.BSE",
    "name": "Laurus Labs Limited"
  },
  {
    "symbol": "LAXMICOT.BSE",
    "name": "Laxmi Cotspin Limited"
  },
  {
    "symbol": "LAXMIDENTL.BSE",
    "name": "Laxmi Dental Limited"
  },
  {
    "symbol": "LCCINFOTEC.BSE",
    "name": "LCC Infotech Limited"
  },
  {
    "symbol": "LEMONTREE.BSE",
    "name": "Lemon Tree Hotels Limited"
  },
  {
    "symbol": "LEXUS.BSE",
    "name": "Lexus Granito (India) Limited"
  },
  {
    "symbol": "LFIC.BSE",
    "name": "Lakshmi Finance & Industrial Corporation Limited"
  },
  {
    "symbol": "LGBBROSLTD.BSE",
    "name": "LG Balakrishnan & Bros Limited"
  },
  {
    "symbol": "LGHL.BSE",
    "name": "Laxmi Goldorna House Limited"
  },
  {
    "symbol": "LIBAS.BSE",
    "name": "Libas Consumer Products Limited"
  },
  {
    "symbol": "LIBERTSHOE.BSE",
    "name": "Liberty Shoes Limited"
  },
  {
    "symbol": "LICHSGFIN.BSE",
    "name": "LIC Housing Finance Limited"
  },
  {
    "symbol": "LICI.BSE",
    "name": "Life Insurance Corporation Of India"
  },
  {
    "symbol": "LIKHITHA.BSE",
    "name": "Likhitha Infrastructure Limited"
  },
  {
    "symbol": "LINC.BSE",
    "name": "Linc Limited"
  },
  {
    "symbol": "LINCOLN.BSE",
    "name": "Lincoln Pharmaceuticals Limited"
  },
  {
    "symbol": "LINDEINDIA.BSE",
    "name": "Linde India Limited"
  },
  {
    "symbol": "LLOYDSENGG.BSE",
    "name": "LLOYDS ENGINEERING WORKS LIMITED"
  },
  {
    "symbol": "LLOYDSENT.BSE",
    "name": "Lloyds Enterprises Limited"
  },
  {
    "symbol": "LLOYDSME.BSE",
    "name": "Lloyds Metals And Energy Limited"
  },
  {
    "symbol": "LMW.BSE",
    "name": "LMW Limited"
  },
  {
    "symbol": "LODHA.BSE",
    "name": "Macrotech Developers Limited"
  },
  {
    "symbol": "LOKESHMACH.BSE",
    "name": "Lokesh Machines Limited"
  },
  {
    "symbol": "LORDSCHLO.BSE",
    "name": "Lords Chloro Alkali Limited"
  },
  {
    "symbol": "LOTUSEYE.BSE",
    "name": "Lotus Eye Hospital and Institute Limited"
  },
  {
    "symbol": "LOVABLE.BSE",
    "name": "Lovable Lingerie Limited"
  },
  {
    "symbol": "LOYALTEX.BSE",
    "name": "Loyal Textile Mills Limited"
  },
  {
    "symbol": "LPDC.BSE",
    "name": "Landmark Property Development Company Limited"
  },
  {
    "symbol": "LT.BSE",
    "name": "Larsen & Toubro Limited"
  },
  {
    "symbol": "LTF.BSE",
    "name": "L&T Finance Limited"
  },
  {
    "symbol": "LTFOODS.BSE",
    "name": "LT Foods Limited"
  },
  {
    "symbol": "LTIM.BSE",
    "name": "LTIMindtree Limited"
  },
  {
    "symbol": "LTTS.BSE",
    "name": "L&T Technology Services Limited"
  },
  {
    "symbol": "LUMAXIND.BSE",
    "name": "Lumax Industries Limited"
  },
  {
    "symbol": "LUMAXTECH.BSE",
    "name": "Lumax Auto Technologies Limited"
  },
  {
    "symbol": "LUPIN.BSE",
    "name": "Lupin Limited"
  },
  {
    "symbol": "LUXIND.BSE",
    "name": "Lux Industries Limited"
  },
  {
    "symbol": "LXCHEM.BSE",
    "name": "Laxmi Organic Industries Limited"
  },
  {
    "symbol": "LYKALABS.BSE",
    "name": "Lyka Labs Limited"
  },
  {
    "symbol": "LYPSAGEMS.BSE",
    "name": "Lypsa Gems & Jewellery Limited"
  },
  {
    "symbol": "M&M.BSE",
    "name": "Mahindra & Mahindra Limited"
  },
  {
    "symbol": "M&MFIN.BSE",
    "name": "Mahindra & Mahindra Financial Services Limited"
  },
  {
    "symbol": "MAANALU.BSE",
    "name": "Maan Aluminium Limited"
  },
  {
    "symbol": "MACPOWER.BSE",
    "name": "Macpower CNC Machines Limited"
  },
  {
    "symbol": "MADHAV.BSE",
    "name": "Madhav Marbles and Granites Limited"
  },
  {
    "symbol": "MADHUCON.BSE",
    "name": "Madhucon Projects Limited"
  },
  {
    "symbol": "MADRASFERT.BSE",
    "name": "Madras Fertilizers Limited"
  },
  {
    "symbol": "MAGADSUGAR.BSE",
    "name": "Magadh Sugar & Energy Limited"
  },
  {
    "symbol": "MAGNUM.BSE",
    "name": "Magnum Ventures Limited"
  },
  {
    "symbol": "MAHABANK.BSE",
    "name": "Bank of Maharashtra"
  },
  {
    "symbol": "MAHAPEXLTD.BSE",
    "name": "Maha Rashtra Apex Corporation Limited"
  },
  {
    "symbol": "MAHASTEEL.BSE",
    "name": "Mahamaya Steel Industries Limited"
  },
  {
    "symbol": "MAHEPC.BSE",
    "name": "Mahindra EPC Irrigation Limited"
  },
  {
    "symbol": "MAHESHWARI.BSE",
    "name": "Maheshwari Logistics Limited"
  },
  {
    "symbol": "MAHLIFE.BSE",
    "name": "Mahindra Lifespace Developers Limited"
  },
  {
    "symbol": "MAHLOG.BSE",
    "name": "Mahindra Logistics Limited"
  },
  {
    "symbol": "MAHSCOOTER.BSE",
    "name": "Maharashtra Scooters Limited"
  },
  {
    "symbol": "MAHSEAMLES.BSE",
    "name": "Maharashtra Seamless Limited"
  },
  {
    "symbol": "MAITHANALL.BSE",
    "name": "Maithan Alloys Limited"
  },
  {
    "symbol": "MALLCOM.BSE",
    "name": "Mallcom (India) Limited"
  },
  {
    "symbol": "MALUPAPER.BSE",
    "name": "Malu Paper Mills Limited"
  },
  {
    "symbol": "MAMATA.BSE",
    "name": "Mamata Machinery Limited"
  },
  {
    "symbol": "MANAKALUCO.BSE",
    "name": "Manaksia Aluminium Company Limited"
  },
  {
    "symbol": "MANAKCOAT.BSE",
    "name": "Manaksia Coated Metals & Industries Limited"
  },
  {
    "symbol": "MANAKSIA.BSE",
    "name": "Manaksia Limited"
  },
  {
    "symbol": "MANAKSTEEL.BSE",
    "name": "Manaksia Steels Limited"
  },
  {
    "symbol": "MANALIPETC.BSE",
    "name": "Manali Petrochemicals Limited"
  },
  {
    "symbol": "MANAPPURAM.BSE",
    "name": "Manappuram Finance Limited"
  },
  {
    "symbol": "MANBA.BSE",
    "name": "Manba Finance Limited"
  },
  {
    "symbol": "MANCREDIT.BSE",
    "name": "Mangal Credit and Fincorp Limited"
  },
  {
    "symbol": "MANGALAM.BSE",
    "name": "Mangalam Drugs And Organics Limited"
  },
  {
    "symbol": "MANGCHEFER.BSE",
    "name": "Mangalore Chemicals & Fertilizers Limited"
  },
  {
    "symbol": "MANGLMCEM.BSE",
    "name": "Mangalam Cement Limited"
  },
  {
    "symbol": "MANINDS.BSE",
    "name": "Man Industries (India) Limited"
  },
  {
    "symbol": "MANINFRA.BSE",
    "name": "Man Infraconstruction Limited"
  },
  {
    "symbol": "MANKIND.BSE",
    "name": "Mankind Pharma Limited"
  },
  {
    "symbol": "MANOMAY.BSE",
    "name": "Manomay Tex India Limited"
  },
  {
    "symbol": "MANORAMA.BSE",
    "name": "Manorama Industries Limited"
  },
  {
    "symbol": "MANORG.BSE",
    "name": "Mangalam Organics Limited"
  },
  {
    "symbol": "MANUGRAPH.BSE",
    "name": "Manugraph India Limited"
  },
  {
    "symbol": "MANYAVAR.BSE",
    "name": "Vedant Fashions Limited"
  },
  {
    "symbol": "MAPMYINDIA.BSE",
    "name": "C.E. Info Systems Limited"
  },
  {
    "symbol": "MARALOVER.BSE",
    "name": "Maral Overseas Limited"
  },
  {
    "symbol": "MARATHON.BSE",
    "name": "Marathon Nextgen Realty Limited"
  },
  {
    "symbol": "MARICO.BSE",
    "name": "Marico Limited"
  },
  {
    "symbol": "MARINE.BSE",
    "name": "Marine Electricals (India) Limited"
  },
  {
    "symbol": "MARKSANS.BSE",
    "name": "Marksans Pharma Limited"
  },
  {
    "symbol": "MARSHALL.BSE",
    "name": "Marshall Machines Limited"
  },
  {
    "symbol": "MARUTI.BSE",
    "name": "Maruti Suzuki India Limited"
  },
  {
    "symbol": "MASFIN.BSE",
    "name": "MAS Financial Services Limited"
  },
  {
    "symbol": "MASKINVEST.BSE",
    "name": "Mask Investments Limited"
  },
  {
    "symbol": "MASTEK.BSE",
    "name": "Mastek Limited"
  },
  {
    "symbol": "MASTERTR.BSE",
    "name": "Master Trust Limited"
  },
  {
    "symbol": "MATRIMONY.BSE",
    "name": "Matrimony.Com Limited"
  },
  {
    "symbol": "MAWANASUG.BSE",
    "name": "Mawana Sugars Limited"
  },
  {
    "symbol": "MAXESTATES.BSE",
    "name": "Max Estates Limited"
  },
  {
    "symbol": "MAXHEALTH.BSE",
    "name": "Max Healthcare Institute Limited"
  },
  {
    "symbol": "MAXIND.BSE",
    "name": "Max India Limited"
  },
  {
    "symbol": "MAYURUNIQ.BSE",
    "name": "Mayur Uniquoters Ltd"
  },
  {
    "symbol": "MAZDA.BSE",
    "name": "Mazda Limited"
  },
  {
    "symbol": "MAZDOCK.BSE",
    "name": "Mazagon Dock Shipbuilders Limited"
  },
  {
    "symbol": "MBAPL.BSE",
    "name": "Madhya Bharat Agro Products Limited"
  },
  {
    "symbol": "MBLINFRA.BSE",
    "name": "MBL Infrastructure Limited"
  },
  {
    "symbol": "MCL.BSE",
    "name": "Madhav Copper Limited"
  },
  {
    "symbol": "MCLEODRUSS.BSE",
    "name": "Mcleod Russel India Limited"
  },
  {
    "symbol": "MCLOUD.BSE",
    "name": "Magellanic Cloud Limited"
  },
  {
    "symbol": "MCX.BSE",
    "name": "Multi Commodity Exchange of India Limited"
  },
  {
    "symbol": "MEDANTA.BSE",
    "name": "Global Health Limited"
  },
  {
    "symbol": "MEDIASSIST.BSE",
    "name": "Medi Assist Healthcare Services Limited"
  },
  {
    "symbol": "MEDICAMEQ.BSE",
    "name": "Medicamen Biotech Limited"
  },
  {
    "symbol": "MEDICO.BSE",
    "name": "Medico Remedies Limited"
  },
  {
    "symbol": "MEDPLUS.BSE",
    "name": "Medplus Health Services Limited"
  },
  {
    "symbol": "MEGASOFT.BSE",
    "name": "Megasoft Limited"
  },
  {
    "symbol": "MEGASTAR.BSE",
    "name": "Megastar Foods Limited"
  },
  {
    "symbol": "MENONBE.BSE",
    "name": "Menon Bearings Limited"
  },
  {
    "symbol": "MEP.BSE",
    "name": "MEP Infrastructure Developers Limited"
  },
  {
    "symbol": "METROBRAND.BSE",
    "name": "Metro Brands Limited"
  },
  {
    "symbol": "METROPOLIS.BSE",
    "name": "Metropolis Healthcare Limited"
  },
  {
    "symbol": "MFML.BSE",
    "name": "Mahalaxmi Fabric Mills Limited"
  },
  {
    "symbol": "MFSL.BSE",
    "name": "Max Financial Services Limited"
  },
  {
    "symbol": "MGEL.BSE",
    "name": "Mangalam Global Enterprise Limited"
  },
  {
    "symbol": "MGL.BSE",
    "name": "Mahanagar Gas Limited"
  },
  {
    "symbol": "MHLXMIRU.BSE",
    "name": "Mahalaxmi Rubtech Limited"
  },
  {
    "symbol": "MHRIL.BSE",
    "name": "Mahindra Holidays & Resorts India Limited"
  },
  {
    "symbol": "MICEL.BSE",
    "name": "MIC Electronics Limited"
  },
  {
    "symbol": "MIDHANI.BSE",
    "name": "Mishra Dhatu Nigam Limited"
  },
  {
    "symbol": "MINDACORP.BSE",
    "name": "Minda Corporation Limited"
  },
  {
    "symbol": "MINDTECK.BSE",
    "name": "Mindteck (India) Limited"
  },
  {
    "symbol": "MIRCELECTR.BSE",
    "name": "MIRC Electronics Limited"
  },
  {
    "symbol": "MIRZAINT.BSE",
    "name": "Mirza International Limited"
  },
  {
    "symbol": "MITCON.BSE",
    "name": "MITCON Consultancy & Engineering Services Limited"
  },
  {
    "symbol": "MITTAL.BSE",
    "name": "Mittal Life Style Limited"
  },
  {
    "symbol": "MKPL.BSE",
    "name": "M K Proteins Limited"
  },
  {
    "symbol": "MMFL.BSE",
    "name": "MM Forgings Limited"
  },
  {
    "symbol": "MMP.BSE",
    "name": "MMP Industries Limited"
  },
  {
    "symbol": "MMTC.BSE",
    "name": "MMTC Limited"
  },
  {
    "symbol": "MOBIKWIK.BSE",
    "name": "One Mobikwik Systems Limited"
  },
  {
    "symbol": "MODIRUBBER.BSE",
    "name": "Modi Rubber Limited"
  },
  {
    "symbol": "MODISONLTD.BSE",
    "name": "MODISON LIMITED"
  },
  {
    "symbol": "MODTHREAD.BSE",
    "name": "Modern Threads (India) Limited"
  },
  {
    "symbol": "MOHITIND.BSE",
    "name": "Mohit Industries Limited"
  },
  {
    "symbol": "MOIL.BSE",
    "name": "MOIL Limited"
  },
  {
    "symbol": "MOKSH.BSE",
    "name": "Moksh Ornaments Limited"
  },
  {
    "symbol": "MOL.BSE",
    "name": "Meghmani Organics Limited"
  },
  {
    "symbol": "MOLDTECH.BSE",
    "name": "Mold-Tek Technologies Limited"
  },
  {
    "symbol": "MOLDTKPAC.BSE",
    "name": "Mold-Tek Packaging Limited"
  },
  {
    "symbol": "MONARCH.BSE",
    "name": "Monarch Networth Capital Limited"
  },
  {
    "symbol": "MONTECARLO.BSE",
    "name": "Monte Carlo Fashions Limited"
  },
  {
    "symbol": "MOREPENLAB.BSE",
    "name": "Morepen Laboratories Limited"
  },
  {
    "symbol": "MOSCHIP.BSE",
    "name": "Moschip Technologies Limited"
  },
  {
    "symbol": "MOTHERSON.BSE",
    "name": "Samvardhana Motherson International Limited"
  },
  {
    "symbol": "MOTILALOFS.BSE",
    "name": "Motilal Oswal Financial Services Limited"
  },
  {
    "symbol": "MOTISONS.BSE",
    "name": "Motisons Jewellers Limited"
  },
  {
    "symbol": "MOTOGENFIN.BSE",
    "name": "The Motor & General Finance Limited"
  },
  {
    "symbol": "MPHASIS.BSE",
    "name": "MphasiS Limited"
  },
  {
    "symbol": "MPSLTD.BSE",
    "name": "MPS Limited"
  },
  {
    "symbol": "MRF.BSE",
    "name": "MRF Limited"
  },
  {
    "symbol": "MRPL.BSE",
    "name": "Mangalore Refinery and Petrochemicals Limited"
  },
  {
    "symbol": "MSPL.BSE",
    "name": "MSP Steel & Power Limited"
  },
  {
    "symbol": "MSTCLTD.BSE",
    "name": "Mstc Limited"
  },
  {
    "symbol": "MSUMI.BSE",
    "name": "Motherson Sumi Wiring India Limited"
  },
  {
    "symbol": "MTARTECH.BSE",
    "name": "Mtar Technologies Limited"
  },
  {
    "symbol": "MTEDUCARE.BSE",
    "name": "MT Educare Limited"
  },
  {
    "symbol": "MTNL.BSE",
    "name": "Mahanagar Telephone Nigam Limited"
  },
  {
    "symbol": "MUFIN.BSE",
    "name": "Mufin Green Finance Limited"
  },
  {
    "symbol": "MUFTI.BSE",
    "name": "Credo Brands Marketing Limited"
  },
  {
    "symbol": "MUKANDLTD.BSE",
    "name": "Mukand Limited"
  },
  {
    "symbol": "MUKKA.BSE",
    "name": "Mukka Proteins Limited"
  },
  {
    "symbol": "MUKTAARTS.BSE",
    "name": "Mukta Arts Limited"
  },
  {
    "symbol": "MUNJALAU.BSE",
    "name": "Munjal Auto Industries Limited"
  },
  {
    "symbol": "MUNJALSHOW.BSE",
    "name": "Munjal Showa Limited"
  },
  {
    "symbol": "MURUDCERA.BSE",
    "name": "Murudeshwar Ceramics Limited"
  },
  {
    "symbol": "MUTHOOTCAP.BSE",
    "name": "Muthoot Capital Services Limited"
  },
  {
    "symbol": "MUTHOOTFIN.BSE",
    "name": "Muthoot Finance Limited"
  },
  {
    "symbol": "MUTHOOTMF.BSE",
    "name": "Muthoot Microfin Limited"
  },
  {
    "symbol": "MVGJL.BSE",
    "name": "Manoj Vaibhav Gems N Jewellers Limited"
  },
  {
    "symbol": "NACLIND.BSE",
    "name": "NACL Industries Limited"
  },
  {
    "symbol": "NAGAFERT.BSE",
    "name": "Nagarjuna Fertilizers and Chemicals Limited"
  },
  {
    "symbol": "NAGREEKCAP.BSE",
    "name": "Nagreeka Capital & Infrastructure Limited"
  },
  {
    "symbol": "NAGREEKEXP.BSE",
    "name": "Nagreeka Exports Limited"
  },
  {
    "symbol": "NAHARCAP.BSE",
    "name": "Nahar Capital and Financial Services Limited"
  },
  {
    "symbol": "NAHARINDUS.BSE",
    "name": "Nahar Industrial Enterprises Limited"
  },
  {
    "symbol": "NAHARPOLY.BSE",
    "name": "Nahar Poly Films Limited"
  },
  {
    "symbol": "NAHARSPING.BSE",
    "name": "Nahar Spinning Mills Limited"
  },
  {
    "symbol": "NAM-INDIA.BSE",
    "name": "Nippon Life India Asset Management Limited"
  },
  {
    "symbol": "NARMADA.BSE",
    "name": "Narmada Agrobase Limited"
  },
  {
    "symbol": "NATCAPSUQ.BSE",
    "name": "Natural Capsules Limited"
  },
  {
    "symbol": "NATCOPHARM.BSE",
    "name": "Natco Pharma Limited"
  },
  {
    "symbol": "NATHBIOGEN.BSE",
    "name": "Nath Bio-Genes (India) Limited"
  },
  {
    "symbol": "NATIONALUM.BSE",
    "name": "National Aluminium Company Limited"
  },
  {
    "symbol": "NAUKRI.BSE",
    "name": "Info Edge (India) Limited"
  },
  {
    "symbol": "NAVA.BSE",
    "name": "NAVA LIMITED"
  },
  {
    "symbol": "NAVINFLUOR.BSE",
    "name": "Navin Fluorine International Limited"
  },
  {
    "symbol": "NAVKARCORP.BSE",
    "name": "Navkar Corporation Limited"
  },
  {
    "symbol": "NAVKARURB.BSE",
    "name": "Navkar Urbanstructure Limited"
  },
  {
    "symbol": "NAVNETEDUL.BSE",
    "name": "Navneet Education Limited"
  },
  {
    "symbol": "NAZARA.BSE",
    "name": "Nazara Technologies Limited"
  },
  {
    "symbol": "NBCC.BSE",
    "name": "NBCC (India) Limited"
  },
  {
    "symbol": "NBIFIN.BSE",
    "name": "N. B. I. Industrial Finance Company Limited"
  },
  {
    "symbol": "NCC.BSE",
    "name": "NCC Limited"
  },
  {
    "symbol": "NCLIND.BSE",
    "name": "NCL Industries Limited"
  },
  {
    "symbol": "NDGL.BSE",
    "name": "Naga Dhunseri Group Limited"
  },
  {
    "symbol": "NDL.BSE",
    "name": "Nandan Denim Limited"
  },
  {
    "symbol": "NDLVENTURE.BSE",
    "name": "NDL Ventures Limited"
  },
  {
    "symbol": "NDRAUTO.BSE",
    "name": "Ndr Auto Components Limited"
  },
  {
    "symbol": "NDTV.BSE",
    "name": "New Delhi Television Limited"
  },
  {
    "symbol": "NECCLTD.BSE",
    "name": "North Eastern Carrying Corporation Limited"
  },
  {
    "symbol": "NECLIFE.BSE",
    "name": "Nectar Lifesciences Limited"
  },
  {
    "symbol": "NELCAST.BSE",
    "name": "Nelcast Limited"
  },
  {
    "symbol": "NELCO.BSE",
    "name": "NELCO Limited"
  },
  {
    "symbol": "NEOGEN.BSE",
    "name": "Neogen Chemicals Limited"
  },
  {
    "symbol": "NESCO.BSE",
    "name": "Nesco Limited"
  },
  {
    "symbol": "NESTLEIND.BSE",
    "name": "Nestle India Limited"
  },
  {
    "symbol": "NETWEB.BSE",
    "name": "Netweb Technologies India Limited"
  },
  {
    "symbol": "NETWORK18.BSE",
    "name": "Network18 Media & Investments Limited"
  },
  {
    "symbol": "NEULANDLAB.BSE",
    "name": "Neuland Laboratories Limited"
  },
  {
    "symbol": "NEWGEN.BSE",
    "name": "Newgen Software Technologies Limited"
  },
  {
    "symbol": "NEXTMEDIA.BSE",
    "name": "Next Mediaworks Limited"
  },
  {
    "symbol": "NFL.BSE",
    "name": "National Fertilizers Limited"
  },
  {
    "symbol": "NGIL.BSE",
    "name": "Nakoda Group of Industries Limited"
  },
  {
    "symbol": "NGLFINE.BSE",
    "name": "NGL Fine-Chem Limited"
  },
  {
    "symbol": "NH.BSE",
    "name": "Narayana Hrudayalaya Ltd."
  },
  {
    "symbol": "NHPC.BSE",
    "name": "NHPC Limited"
  },
  {
    "symbol": "NIACL.BSE",
    "name": "The New India Assurance Company Limited"
  },
  {
    "symbol": "NIBE.BSE",
    "name": "NIBE Limited"
  },
  {
    "symbol": "NIBL.BSE",
    "name": "NRB Industrial Bearings Limited"
  },
  {
    "symbol": "NIITLTD.BSE",
    "name": "NIIT Limited"
  },
  {
    "symbol": "NIITMTS.BSE",
    "name": "NIIT Learning Systems Limited"
  },
  {
    "symbol": "NILAINFRA.BSE",
    "name": "Nila Infrastructures Limited"
  },
  {
    "symbol": "NILASPACES.BSE",
    "name": "Nila Spaces Limited"
  },
  {
    "symbol": "NILKAMAL.BSE",
    "name": "Nilkamal Limited"
  },
  {
    "symbol": "NINSYS.BSE",
    "name": "NINtec Systems Limited"
  },
  {
    "symbol": "NIPPOBATRY.BSE",
    "name": "Indo-National Limited"
  },
  {
    "symbol": "NIRAJ.BSE",
    "name": "Niraj Cement Structurals Limited"
  },
  {
    "symbol": "NIRAJISPAT.BSE",
    "name": "Niraj Ispat Industries Limited"
  },
  {
    "symbol": "NITCO.BSE",
    "name": "Nitco Limited"
  },
  {
    "symbol": "NITINSPIN.BSE",
    "name": "Nitin Spinners Limited"
  },
  {
    "symbol": "NITIRAJ.BSE",
    "name": "Nitiraj Engineers Limited"
  },
  {
    "symbol": "NIVABUPA.BSE",
    "name": "Niva Bupa Health Insurance Company Limited"
  },
  {
    "symbol": "NKIND.BSE",
    "name": "NK Industries Limited"
  },
  {
    "symbol": "NLCINDIA.BSE",
    "name": "NLC India Limited"
  },
  {
    "symbol": "NMDC.BSE",
    "name": "NMDC Limited"
  },
  {
    "symbol": "NOCIL.BSE",
    "name": "NOCIL Limited"
  },
  {
    "symbol": "NOIDATOLL.BSE",
    "name": "Noida Toll Bridge Company Limited"
  },
  {
    "symbol": "NORBTEAEXP.BSE",
    "name": "Norben Tea & Exports Limited"
  },
  {
    "symbol": "NORTHARC.BSE",
    "name": "Northern Arc Capital Limited"
  },
  {
    "symbol": "NOVAAGRI.BSE",
    "name": "Nova Agritech Limited"
  },
  {
    "symbol": "NPST.BSE",
    "name": "Network People Services Technologies Limited"
  },
  {
    "symbol": "NRAIL.BSE",
    "name": "N R Agarwal Industries Limited"
  },
  {
    "symbol": "NRBBEARING.BSE",
    "name": "NRB Bearing Limited"
  },
  {
    "symbol": "NRL.BSE",
    "name": "Nupur Recyclers Limited"
  },
  {
    "symbol": "NSIL.BSE",
    "name": "Nalwa Sons Investments Limited"
  },
  {
    "symbol": "NSLNISP.BSE",
    "name": "NMDC Steel Limited"
  },
  {
    "symbol": "NTPC.BSE",
    "name": "NTPC Limited"
  },
  {
    "symbol": "NTPCGREEN.BSE",
    "name": "NTPC Green Energy Limited"
  },
  {
    "symbol": "NUCLEUS.BSE",
    "name": "Nucleus Software Exports Limited"
  },
  {
    "symbol": "NURECA.BSE",
    "name": "Nureca Limited"
  },
  {
    "symbol": "NUVAMA.BSE",
    "name": "Nuvama Wealth Management Limited"
  },
  {
    "symbol": "NUVOCO.BSE",
    "name": "Nuvoco Vistas Corporation Limited"
  },
  {
    "symbol": "NYKAA.BSE",
    "name": "FSN E-Commerce Ventures Limited"
  },
  {
    "symbol": "OAL.BSE",
    "name": "Oriental Aromatics Limited"
  },
  {
    "symbol": "OBCL.BSE",
    "name": "Orissa Bengal Carrier Limited"
  },
  {
    "symbol": "OBEROIRLTY.BSE",
    "name": "Oberoi Realty Limited"
  },
  {
    "symbol": "OCCL.BSE",
    "name": "Oriental Carbon & Chemicals Limited"
  },
  {
    "symbol": "OCCLLTD.BSE",
    "name": "OCCL Limited"
  },
  {
    "symbol": "ODIGMA.BSE",
    "name": "Odigma Consultancy Solutions Limited"
  },
  {
    "symbol": "OFSS.BSE",
    "name": "Oracle Financial Services Software Limited"
  },
  {
    "symbol": "OIL.BSE",
    "name": "Oil India Limited"
  },
  {
    "symbol": "OILCOUNTUB.BSE",
    "name": "Oil Country Tubular Limited"
  },
  {
    "symbol": "OLAELEC.BSE",
    "name": "Ola Electric Mobility Limited"
  },
  {
    "symbol": "OLECTRA.BSE",
    "name": "Olectra Greentech Limited"
  },
  {
    "symbol": "OMAXAUTO.BSE",
    "name": "Omax Autos Limited"
  },
  {
    "symbol": "OMAXE.BSE",
    "name": "Omaxe Limited"
  },
  {
    "symbol": "OMINFRAL.BSE",
    "name": "OM INFRA LIMITED"
  },
  {
    "symbol": "OMKARCHEM.BSE",
    "name": "Omkar Speciality Chemicals Limited"
  },
  {
    "symbol": "ONELIFECAP.BSE",
    "name": "Onelife Capital Advisors Limited"
  },
  {
    "symbol": "ONEPOINT.BSE",
    "name": "One Point One Solutions Limited"
  },
  {
    "symbol": "ONESOURCE.BSE",
    "name": "Onesource Specialty Pharma Limited"
  },
  {
    "symbol": "ONGC.BSE",
    "name": "Oil & Natural Gas Corporation Limited"
  },
  {
    "symbol": "ONMOBILE.BSE",
    "name": "OnMobile Global Limited"
  },
  {
    "symbol": "ONWARDTEC.BSE",
    "name": "Onward Technologies Limited"
  },
  {
    "symbol": "OPTIEMUS.BSE",
    "name": "Optiemus Infracom Limited"
  },
  {
    "symbol": "ORBTEXP.BSE",
    "name": "Orbit Exports Limited"
  },
  {
    "symbol": "ORCHASP.BSE",
    "name": "Orchasp Limited"
  },
  {
    "symbol": "ORCHPHARMA.BSE",
    "name": "Orchid Pharma Limited"
  },
  {
    "symbol": "ORICONENT.BSE",
    "name": "Oricon Enterprises Limited"
  },
  {
    "symbol": "ORIENTALTL.BSE",
    "name": "Oriental Trimex Limited"
  },
  {
    "symbol": "ORIENTBELL.BSE",
    "name": "Orient Bell Limited"
  },
  {
    "symbol": "ORIENTCEM.BSE",
    "name": "Orient Cement Limited"
  },
  {
    "symbol": "ORIENTCER.BSE",
    "name": "ORIENT CERATECH LIMITED"
  },
  {
    "symbol": "ORIENTELEC.BSE",
    "name": "Orient Electric Limited"
  },
  {
    "symbol": "ORIENTHOT.BSE",
    "name": "Oriental Hotels Limited"
  },
  {
    "symbol": "ORIENTLTD.BSE",
    "name": "Orient Press Limited"
  },
  {
    "symbol": "ORIENTPPR.BSE",
    "name": "Orient Paper & Industries Limited"
  },
  {
    "symbol": "ORIENTTECH.BSE",
    "name": "Orient Technologies Limited"
  },
  {
    "symbol": "ORISSAMINE.BSE",
    "name": "The Orissa Minerals Development Company Limited"
  },
  {
    "symbol": "ORTEL.BSE",
    "name": "Ortel Communications Limited"
  },
  {
    "symbol": "ORTINGLOBE.BSE",
    "name": "ORTIN GLOBAL LIMITED"
  },
  {
    "symbol": "OSIAHYPER.BSE",
    "name": "Osia Hyper Retail Limited"
  },
  {
    "symbol": "OSWALAGRO.BSE",
    "name": "Oswal Agro Mills Limited"
  },
  {
    "symbol": "OSWALGREEN.BSE",
    "name": "Oswal Greentech Limited"
  },
  {
    "symbol": "OSWALSEEDS.BSE",
    "name": "ShreeOswal Seeds And Chemicals Limited"
  },
  {
    "symbol": "PAGEIND.BSE",
    "name": "Page Industries Limited"
  },
  {
    "symbol": "PAISALO.BSE",
    "name": "Paisalo Digital Limited"
  },
  {
    "symbol": "PAKKA.BSE",
    "name": "PAKKA LIMITED"
  },
  {
    "symbol": "PALASHSECU.BSE",
    "name": "Palash Securities Limited"
  },
  {
    "symbol": "PALREDTEC.BSE",
    "name": "Palred Technologies Limited"
  },
  {
    "symbol": "PANACEABIO.BSE",
    "name": "Panacea Biotec Limited"
  },
  {
    "symbol": "PANACHE.BSE",
    "name": "Panache Digilife Limited"
  },
  {
    "symbol": "PANAMAPET.BSE",
    "name": "Panama Petrochem Limited"
  },
  {
    "symbol": "PANSARI.BSE",
    "name": "Pansari Developers Limited"
  },
  {
    "symbol": "PAR.BSE",
    "name": "Par Drugs And Chemicals Limited"
  },
  {
    "symbol": "PARACABLES.BSE",
    "name": "Paramount Communications Limited"
  },
  {
    "symbol": "PARADEEP.BSE",
    "name": "Paradeep Phosphates Limited"
  },
  {
    "symbol": "PARAGMILK.BSE",
    "name": "Parag Milk Foods Limited"
  },
  {
    "symbol": "PARAS.BSE",
    "name": "Paras Defence and Space Technologies Limited"
  },
  {
    "symbol": "PARASPETRO.BSE",
    "name": "Paras Petrofils Limited"
  },
  {
    "symbol": "PARKHOTELS.BSE",
    "name": "Apeejay Surrendra Park Hotels Limited"
  },
  {
    "symbol": "PARSVNATH.BSE",
    "name": "Parsvnath Developers Limited"
  },
  {
    "symbol": "PASUPTAC.BSE",
    "name": "Pasupati Acrylon Limited"
  },
  {
    "symbol": "PATANJALI.BSE",
    "name": "Patanjali Foods Limited"
  },
  {
    "symbol": "PATELENG.BSE",
    "name": "Patel Engineering Limited"
  },
  {
    "symbol": "PATINTLOG.BSE",
    "name": "Patel Integrated Logistics Limited"
  },
  {
    "symbol": "PAVNAIND.BSE",
    "name": "Pavna Industries Limited"
  },
  {
    "symbol": "PAYTM.BSE",
    "name": "One 97 Communications Limited"
  },
  {
    "symbol": "PCBL.BSE",
    "name": "PCBL Chemical Limited"
  },
  {
    "symbol": "PCJEWELLER.BSE",
    "name": "PC Jeweller Limited"
  },
  {
    "symbol": "PDMJEPAPER.BSE",
    "name": "Pudumjee Paper Products Limited"
  },
  {
    "symbol": "PDSL.BSE",
    "name": "PDS Limited"
  },
  {
    "symbol": "PEARLPOLY.BSE",
    "name": "Pearl Polymers Limited"
  },
  {
    "symbol": "PEL.BSE",
    "name": "Piramal Enterprises Limited"
  },
  {
    "symbol": "PENIND.BSE",
    "name": "Pennar Industries Limited"
  },
  {
    "symbol": "PENINLAND.BSE",
    "name": "Peninsula Land Limited"
  },
  {
    "symbol": "PERSISTENT.BSE",
    "name": "Persistent Systems Limited"
  },
  {
    "symbol": "PETRONET.BSE",
    "name": "Petronet LNG Limited"
  },
  {
    "symbol": "PFC.BSE",
    "name": "Power Finance Corporation Limited"
  },
  {
    "symbol": "PFIZER.BSE",
    "name": "Pfizer Limited"
  },
  {
    "symbol": "PFOCUS.BSE",
    "name": "Prime Focus Limited"
  },
  {
    "symbol": "PFS.BSE",
    "name": "PTC India Financial Services Limited"
  },
  {
    "symbol": "PGEL.BSE",
    "name": "PG Electroplast Limited"
  },
  {
    "symbol": "PGHH.BSE",
    "name": "Procter & Gamble Hygiene and Health Care Limited"
  },
  {
    "symbol": "PGHL.BSE",
    "name": "Procter & Gamble Health Limited"
  },
  {
    "symbol": "PGIL.BSE",
    "name": "Pearl Global Industries Limited"
  },
  {
    "symbol": "PHOENIXLTD.BSE",
    "name": "The Phoenix Mills Limited"
  },
  {
    "symbol": "PIDILITIND.BSE",
    "name": "Pidilite Industries Limited"
  },
  {
    "symbol": "PIGL.BSE",
    "name": "Power & Instrumentation (Gujarat) Limited"
  },
  {
    "symbol": "PIIND.BSE",
    "name": "PI Industries Limited"
  },
  {
    "symbol": "PILANIINVS.BSE",
    "name": "Pilani Investment and Industries Corporation Limited"
  },
  {
    "symbol": "PILITA.BSE",
    "name": "PIL ITALICA LIFESTYLE LIMITED"
  },
  {
    "symbol": "PIONEEREMB.BSE",
    "name": "Pioneer Embroideries Limited"
  },
  {
    "symbol": "PITTIENG.BSE",
    "name": "Pitti Engineering Limited"
  },
  {
    "symbol": "PIXTRANS.BSE",
    "name": "Pix Transmissions Limited"
  },
  {
    "symbol": "PKTEA.BSE",
    "name": "The Peria Karamalai Tea & Produce Company Limited"
  },
  {
    "symbol": "PLASTIBLEN.BSE",
    "name": "Plastiblends India Limited"
  },
  {
    "symbol": "PLATIND.BSE",
    "name": "Platinum Industries Limited"
  },
  {
    "symbol": "PLAZACABLE.BSE",
    "name": "Plaza Wires Limited"
  },
  {
    "symbol": "PNB.BSE",
    "name": "Punjab National Bank"
  },
  {
    "symbol": "PNBGILTS.BSE",
    "name": "PNB Gilts Limited"
  },
  {
    "symbol": "PNBHOUSING.BSE",
    "name": "PNB Housing Finance Limited"
  },
  {
    "symbol": "PNC.BSE",
    "name": "Pritish Nandy Communications Limited"
  },
  {
    "symbol": "PNCINFRA.BSE",
    "name": "PNC Infratech Limited"
  },
  {
    "symbol": "PNGJL.BSE",
    "name": "P N Gadgil Jewellers Limited"
  },
  {
    "symbol": "POCL.BSE",
    "name": "Pondy Oxides & Chemicals Limited"
  },
  {
    "symbol": "PODDARMENT.BSE",
    "name": "Poddar Pigments Limited"
  },
  {
    "symbol": "POKARNA.BSE",
    "name": "Pokarna Limited"
  },
  {
    "symbol": "POLICYBZR.BSE",
    "name": "PB Fintech Limited"
  },
  {
    "symbol": "POLYCAB.BSE",
    "name": "Polycab India Limited"
  },
  {
    "symbol": "POLYMED.BSE",
    "name": "Poly Medicure Limited"
  },
  {
    "symbol": "POLYPLEX.BSE",
    "name": "Polyplex Corporation Limited"
  },
  {
    "symbol": "PONNIERODE.BSE",
    "name": "Ponni Sugars (Erode) Limited"
  },
  {
    "symbol": "POONAWALLA.BSE",
    "name": "Poonawalla Fincorp Limited"
  },
  {
    "symbol": "POWERGRID.BSE",
    "name": "Power Grid Corporation of India Limited"
  },
  {
    "symbol": "POWERINDIA.BSE",
    "name": "Hitachi Energy India Limited"
  },
  {
    "symbol": "POWERMECH.BSE",
    "name": "Power Mech Projects Limited"
  },
  {
    "symbol": "PPAP.BSE",
    "name": "PPAP Automotive Limited"
  },
  {
    "symbol": "PPL.BSE",
    "name": "Prakash Pipes Limited"
  },
  {
    "symbol": "PPLPHARMA.BSE",
    "name": "Piramal Pharma Limited"
  },
  {
    "symbol": "PRABHA.BSE",
    "name": "Prabha Energy Limited"
  },
  {
    "symbol": "PRAENG.BSE",
    "name": "Prajay Engineers Syndicate Limited"
  },
  {
    "symbol": "PRAJIND.BSE",
    "name": "Praj Industries Limited"
  },
  {
    "symbol": "PRAKASH.BSE",
    "name": "Prakash Industries Limited"
  },
  {
    "symbol": "PRAKASHSTL.BSE",
    "name": "Prakash Steelage Limited"
  },
  {
    "symbol": "PRAXIS.BSE",
    "name": "Praxis Home Retail Limited"
  },
  {
    "symbol": "PRECAM.BSE",
    "name": "Precision Camshafts Limited"
  },
  {
    "symbol": "PRECOT.BSE",
    "name": "Precot Limited"
  },
  {
    "symbol": "PRECWIRE.BSE",
    "name": "Precision Wires India Limited"
  },
  {
    "symbol": "PREMEXPLN.BSE",
    "name": "Premier Explosives Limited"
  },
  {
    "symbol": "PREMIER.BSE",
    "name": "Premier Limited"
  },
  {
    "symbol": "PREMIERENE.BSE",
    "name": "Premier Energies Limited"
  },
  {
    "symbol": "PREMIERPOL.BSE",
    "name": "Premier Polyfilm Limited"
  },
  {
    "symbol": "PRESTIGE.BSE",
    "name": "Prestige Estates Projects Limited"
  },
  {
    "symbol": "PRICOLLTD.BSE",
    "name": "Pricol Limited"
  },
  {
    "symbol": "PRIMESECU.BSE",
    "name": "Prime Securities Limited"
  },
  {
    "symbol": "PRIMO.BSE",
    "name": "Primo Chemicals Limited"
  },
  {
    "symbol": "PRINCEPIPE.BSE",
    "name": "Prince Pipes And Fittings Limited"
  },
  {
    "symbol": "PRITI.BSE",
    "name": "Priti International Limited"
  },
  {
    "symbol": "PRITIKAUTO.BSE",
    "name": "Pritika Auto Industries Limited"
  },
  {
    "symbol": "PRIVISCL.BSE",
    "name": "Privi Speciality Chemicals Limited"
  },
  {
    "symbol": "PROTEAN.BSE",
    "name": "Protean eGov Technologies Limited"
  },
  {
    "symbol": "PROZONER.BSE",
    "name": "Prozone Realty Limited"
  },
  {
    "symbol": "PRSMJOHNSN.BSE",
    "name": "Prism Johnson Limited"
  },
  {
    "symbol": "PRUDENT.BSE",
    "name": "Prudent Corporate Advisory Services Limited"
  },
  {
    "symbol": "PRUDMOULI.BSE",
    "name": "Prudential Sugar Corporation Limited"
  },
  {
    "symbol": "PSB.BSE",
    "name": "Punjab & Sind Bank"
  },
  {
    "symbol": "PSPPROJECT.BSE",
    "name": "PSP Projects Limited"
  },
  {
    "symbol": "PTC.BSE",
    "name": "PTC India Limited"
  },
  {
    "symbol": "PTCIL.BSE",
    "name": "PTC Industries Limited"
  },
  {
    "symbol": "PTL.BSE",
    "name": "PTL Enterprises Limited"
  },
  {
    "symbol": "PUNJABCHEM.BSE",
    "name": "Punjab Chemicals & Crop Protection Limited"
  },
  {
    "symbol": "PURVA.BSE",
    "name": "Puravankara Limited"
  },
  {
    "symbol": "PVP.BSE",
    "name": "PVP Ventures Limited"
  },
  {
    "symbol": "PVRINOX.BSE",
    "name": "PVR INOX Limited"
  },
  {
    "symbol": "PVSL.BSE",
    "name": "Popular Vehicles and Services Limited"
  },
  {
    "symbol": "PYRAMID.BSE",
    "name": "Pyramid Technoplast Limited"
  },
  {
    "symbol": "QPOWER.BSE",
    "name": "Quality Power Electrical Equipments Limited"
  },
  {
    "symbol": "QUADFUTURE.BSE",
    "name": "Quadrant Future Tek Limited"
  },
  {
    "symbol": "QUESS.BSE",
    "name": "Quess Corp Limited"
  },
  {
    "symbol": "QUICKHEAL.BSE",
    "name": "Quick Heal Technologies Limited"
  },
  {
    "symbol": "RACE.BSE",
    "name": "Race Eco Chain Limited"
  },
  {
    "symbol": "RACLGEAR.BSE",
    "name": "RACL Geartech Limited"
  },
  {
    "symbol": "RADAAN.BSE",
    "name": "Radaan Mediaworks India Limited"
  },
  {
    "symbol": "RADHIKAJWE.BSE",
    "name": "Radhika Jeweltech Limited"
  },
  {
    "symbol": "RADIANTCMS.BSE",
    "name": "Radiant Cash Management Services Limited"
  },
  {
    "symbol": "RADICO.BSE",
    "name": "Radico Khaitan Limited"
  },
  {
    "symbol": "RADIOCITY.BSE",
    "name": "Music Broadcast Limited"
  },
  {
    "symbol": "RAILTEL.BSE",
    "name": "Railtel Corporation Of India Limited"
  },
  {
    "symbol": "RAIN.BSE",
    "name": "Rain Industries Limited"
  },
  {
    "symbol": "RAINBOW.BSE",
    "name": "Rainbow Childrens Medicare Limited"
  },
  {
    "symbol": "RAJESHEXPO.BSE",
    "name": "Rajesh Exports Limited"
  },
  {
    "symbol": "RAJMET.BSE",
    "name": "Rajnandini Metal Limited"
  },
  {
    "symbol": "RAJRATAN.BSE",
    "name": "Rajratan Global Wire Limited"
  },
  {
    "symbol": "RAJRILTD.BSE",
    "name": "Raj Rayon Industries Limited"
  },
  {
    "symbol": "RAJSREESUG.BSE",
    "name": "Rajshree Sugars & Chemicals Limited"
  },
  {
    "symbol": "RAJTV.BSE",
    "name": "Raj Television Network Limited"
  },
  {
    "symbol": "RALLIS.BSE",
    "name": "Rallis India Limited"
  },
  {
    "symbol": "RAMANEWS.BSE",
    "name": "Shree Rama Newsprint Limited"
  },
  {
    "symbol": "RAMAPHO.BSE",
    "name": "Rama Phosphates Limited"
  },
  {
    "symbol": "RAMASTEEL.BSE",
    "name": "Rama Steel Tubes Limited"
  },
  {
    "symbol": "RAMCOCEM.BSE",
    "name": "The Ramco Cements Limited"
  },
  {
    "symbol": "RAMCOIND.BSE",
    "name": "Ramco Industries Limited"
  },
  {
    "symbol": "RAMCOSYS.BSE",
    "name": "Ramco Systems Limited"
  },
  {
    "symbol": "RAMKY.BSE",
    "name": "Ramky Infrastructure Limited"
  },
  {
    "symbol": "RAMRAT.BSE",
    "name": "Ram Ratna Wires Limited"
  },
  {
    "symbol": "RANASUG.BSE",
    "name": "Rana Sugars Limited"
  },
  {
    "symbol": "RANEHOLDIN.BSE",
    "name": "Rane Holdings Limited"
  },
  {
    "symbol": "RATEGAIN.BSE",
    "name": "Rategain Travel Technologies Limited"
  },
  {
    "symbol": "RATNAMANI.BSE",
    "name": "Ratnamani Metals & Tubes Limited"
  },
  {
    "symbol": "RATNAVEER.BSE",
    "name": "Ratnaveer Precision Engineering Limited"
  },
  {
    "symbol": "RAYMOND.BSE",
    "name": "Raymond Limited"
  },
  {
    "symbol": "RAYMONDLSL.BSE",
    "name": "Raymond Lifestyle Limited"
  },
  {
    "symbol": "RBA.BSE",
    "name": "Restaurant Brands Asia Limited"
  },
  {
    "symbol": "RBLBANK.BSE",
    "name": "RBL Bank Limited"
  },
  {
    "symbol": "RBZJEWEL.BSE",
    "name": "RBZ Jewellers Limited"
  },
  {
    "symbol": "RCF.BSE",
    "name": "Rashtriya Chemicals and Fertilizers Limited"
  },
  {
    "symbol": "RCOM.BSE",
    "name": "Reliance Communications Limited"
  },
  {
    "symbol": "RECLTD.BSE",
    "name": "REC Limited"
  },
  {
    "symbol": "REDINGTON.BSE",
    "name": "Redington Limited"
  },
  {
    "symbol": "REDTAPE.BSE",
    "name": "Redtape Limited"
  },
  {
    "symbol": "REFEX.BSE",
    "name": "Refex Industries Limited"
  },
  {
    "symbol": "REGENCERAM.BSE",
    "name": "Regency Ceramics Limited"
  },
  {
    "symbol": "RELAXO.BSE",
    "name": "Relaxo Footwears Limited"
  },
  {
    "symbol": "RELCHEMQ.BSE",
    "name": "Reliance Chemotex Industries Limited"
  },
  {
    "symbol": "RELIABLE.BSE",
    "name": "Reliable Data Services Limited"
  },
  {
    "symbol": "RELIANCE.BSE",
    "name": "Reliance Industries Limited"
  },
  {
    "symbol": "RELIGARE.BSE",
    "name": "Religare Enterprises Limited"
  },
  {
    "symbol": "RELINFRA.BSE",
    "name": "Reliance Infrastructure Limited"
  },
  {
    "symbol": "RELTD.BSE",
    "name": "Ravindra Energy Limited"
  },
  {
    "symbol": "REMSONSIND.BSE",
    "name": "Remsons Industries Limited"
  },
  {
    "symbol": "RENUKA.BSE",
    "name": "Shree Renuka Sugars Limited"
  },
  {
    "symbol": "REPCOHOME.BSE",
    "name": "Repco Home Finance Limited"
  },
  {
    "symbol": "REPL.BSE",
    "name": "Rudrabhishek Enterprises Limited"
  },
  {
    "symbol": "REPRO.BSE",
    "name": "Repro India Limited"
  },
  {
    "symbol": "RESPONIND.BSE",
    "name": "Responsive Industries Limited"
  },
  {
    "symbol": "RETAIL.BSE",
    "name": "JHS Svendgaard Retail Ventures Limited"
  },
  {
    "symbol": "RGL.BSE",
    "name": "Renaissance Global Limited"
  },
  {
    "symbol": "RHFL.BSE",
    "name": "Reliance Home Finance Limited"
  },
  {
    "symbol": "RHIM.BSE",
    "name": "RHI MAGNESITA INDIA LIMITED"
  },
  {
    "symbol": "RHL.BSE",
    "name": "Robust Hotels Limited"
  },
  {
    "symbol": "RICOAUTO.BSE",
    "name": "Rico Auto Industries Limited"
  },
  {
    "symbol": "RIIL.BSE",
    "name": "Reliance Industrial Infrastructure Limited"
  },
  {
    "symbol": "RISHABH.BSE",
    "name": "Rishabh Instruments Limited"
  },
  {
    "symbol": "RITCO.BSE",
    "name": "Ritco Logistics Limited"
  },
  {
    "symbol": "RITES.BSE",
    "name": "RITES Limited"
  },
  {
    "symbol": "RKDL.BSE",
    "name": "Ravi Kumar Distilleries Limited"
  },
  {
    "symbol": "RKEC.BSE",
    "name": "RKEC Projects Limited"
  },
  {
    "symbol": "RKFORGE.BSE",
    "name": "Ramkrishna Forgings Limited"
  },
  {
    "symbol": "RKSWAMY.BSE",
    "name": "R K Swamy Limited"
  },
  {
    "symbol": "RML.BSE",
    "name": "Rane (Madras) Limited"
  },
  {
    "symbol": "ROHLTD.BSE",
    "name": "Royal Orchid Hotels Limited"
  },
  {
    "symbol": "ROLEXRINGS.BSE",
    "name": "Rolex Rings Limited"
  },
  {
    "symbol": "ROLLT.BSE",
    "name": "Rollatainers Limited"
  },
  {
    "symbol": "ROLTA.BSE",
    "name": "Rolta India Limited"
  },
  {
    "symbol": "ROML.BSE",
    "name": "Raj Oil Mills Limited"
  },
  {
    "symbol": "ROSSARI.BSE",
    "name": "Rossari Biotech Limited"
  },
  {
    "symbol": "ROSSELLIND.BSE",
    "name": "Rossell India Limited"
  },
  {
    "symbol": "ROSSTECH.BSE",
    "name": "Rossell Techsys Limited"
  },
  {
    "symbol": "ROTO.BSE",
    "name": "Roto Pumps Limited"
  },
  {
    "symbol": "ROUTE.BSE",
    "name": "ROUTE MOBILE LIMITED"
  },
  {
    "symbol": "RPEL.BSE",
    "name": "Raghav Productivity Enhancers Limited"
  },
  {
    "symbol": "RPGLIFE.BSE",
    "name": "RPG Life Sciences Limited"
  },
  {
    "symbol": "RPOWER.BSE",
    "name": "Reliance Power Limited"
  },
  {
    "symbol": "RPPINFRA.BSE",
    "name": "R.P.P. Infra Projects Limited"
  },
  {
    "symbol": "RPPL.BSE",
    "name": "Rajshree Polypack Limited"
  },
  {
    "symbol": "RPSGVENT.BSE",
    "name": "RPSG VENTURES LIMITED"
  },
  {
    "symbol": "RPTECH.BSE",
    "name": "Rashi Peripherals Limited"
  },
  {
    "symbol": "RRKABEL.BSE",
    "name": "R R Kabel Limited"
  },
  {
    "symbol": "RSSOFTWARE.BSE",
    "name": "R. S. Software (India) Limited"
  },
  {
    "symbol": "RSWM.BSE",
    "name": "RSWM Limited"
  },
  {
    "symbol": "RSYSTEMS.BSE",
    "name": "R Systems International Limited"
  },
  {
    "symbol": "RTNINDIA.BSE",
    "name": "RattanIndia Enterprises Limited"
  },
  {
    "symbol": "RTNPOWER.BSE",
    "name": "RattanIndia Power Limited"
  },
  {
    "symbol": "RUBFILA.BSE",
    "name": "Rubfila International Limited"
  },
  {
    "symbol": "RUBYMILLS.BSE",
    "name": "The Ruby Mills Limited"
  },
  {
    "symbol": "RUCHINFRA.BSE",
    "name": "Ruchi Infrastructure Limited"
  },
  {
    "symbol": "RUCHIRA.BSE",
    "name": "Ruchira Papers Limited"
  },
  {
    "symbol": "RUPA.BSE",
    "name": "Rupa & Company Limited"
  },
  {
    "symbol": "RUSHIL.BSE",
    "name": "Rushil Decor Limited"
  },
  {
    "symbol": "RUSTOMJEE.BSE",
    "name": "Keystone Realtors Limited"
  },
  {
    "symbol": "RVHL.BSE",
    "name": "Ravinder Heights Limited"
  },
  {
    "symbol": "RVNL.BSE",
    "name": "Rail Vikas Nigam Limited"
  },
  {
    "symbol": "RVTH.BSE",
    "name": "Revathi Equipment India Limited"
  },
  {
    "symbol": "S&SPOWER.BSE",
    "name": "S&S Power Switchgears Limited"
  },
  {
    "symbol": "SABEVENTS.BSE",
    "name": "Sab Events & Governance Now Media Limited"
  },
  {
    "symbol": "SABTNL.BSE",
    "name": "Sri Adhikari Brothers Television Network Limited"
  },
  {
    "symbol": "SADBHAV.BSE",
    "name": "Sadbhav Engineering Limited"
  },
  {
    "symbol": "SADBHIN.BSE",
    "name": "Sadbhav Infrastructure Project Limited"
  },
  {
    "symbol": "SADHNANIQ.BSE",
    "name": "Sadhana Nitrochem Limited"
  },
  {
    "symbol": "SAFARI.BSE",
    "name": "Safari Industries (India) Limited"
  },
  {
    "symbol": "SAGARDEEP.BSE",
    "name": "Sagardeep Alloys Limited"
  },
  {
    "symbol": "SAGCEM.BSE",
    "name": "Sagar Cements Limited"
  },
  {
    "symbol": "SAGILITY.BSE",
    "name": "Sagility India Limited"
  },
  {
    "symbol": "SAH.BSE",
    "name": "Sah Polymers Limited"
  },
  {
    "symbol": "SAHYADRI.BSE",
    "name": "Sahyadri Industries Limited"
  },
  {
    "symbol": "SAIL.BSE",
    "name": "Steel Authority of India Limited"
  },
  {
    "symbol": "SAILIFE.BSE",
    "name": "Sai Life Sciences Limited"
  },
  {
    "symbol": "SAKAR.BSE",
    "name": "Sakar Healthcare Limited"
  },
  {
    "symbol": "SAKHTISUG.BSE",
    "name": "Sakthi Sugars Limited"
  },
  {
    "symbol": "SAKSOFT.BSE",
    "name": "Saksoft Limited"
  },
  {
    "symbol": "SAKUMA.BSE",
    "name": "Sakuma Exports Limited"
  },
  {
    "symbol": "SALASAR.BSE",
    "name": "Salasar Techno Engineering Limited"
  },
  {
    "symbol": "SALONA.BSE",
    "name": "Salona Cotspin Limited"
  },
  {
    "symbol": "SALSTEEL.BSE",
    "name": "S.A.L. Steel Limited"
  },
  {
    "symbol": "SALZERELEC.BSE",
    "name": "Salzer Electronics Limited"
  },
  {
    "symbol": "SAMBHAAV.BSE",
    "name": "Sambhaav Media Limited"
  },
  {
    "symbol": "SAMHI.BSE",
    "name": "Samhi Hotels Limited"
  },
  {
    "symbol": "SAMMAANCAP.BSE",
    "name": "Sammaan Capital Limited"
  },
  {
    "symbol": "SAMPANN.BSE",
    "name": "Sampann Utpadan India Limited"
  },
  {
    "symbol": "SANATHAN.BSE",
    "name": "Sanathan Textiles Limited"
  },
  {
    "symbol": "SANCO.BSE",
    "name": "Sanco Industries Limited"
  },
  {
    "symbol": "SANDESH.BSE",
    "name": "The Sandesh Limited"
  },
  {
    "symbol": "SANDHAR.BSE",
    "name": "Sandhar Technologies Limited"
  },
  {
    "symbol": "SANDUMA.BSE",
    "name": "Sandur Manganese & Iron Ores Limited"
  },
  {
    "symbol": "SANGAMIND.BSE",
    "name": "Sangam (India) Limited"
  },
  {
    "symbol": "SANGHIIND.BSE",
    "name": "Sanghi Industries Limited"
  },
  {
    "symbol": "SANGHVIMOV.BSE",
    "name": "Sanghvi Movers Limited"
  },
  {
    "symbol": "SANGINITA.BSE",
    "name": "Sanginita Chemicals Limited"
  },
  {
    "symbol": "SANOFI.BSE",
    "name": "Sanofi India Limited"
  },
  {
    "symbol": "SANOFICONR.BSE",
    "name": "Sanofi Consumer Healthcare India Limited"
  },
  {
    "symbol": "SANSERA.BSE",
    "name": "Sansera Engineering Limited"
  },
  {
    "symbol": "SANSTAR.BSE",
    "name": "Sanstar Limited"
  },
  {
    "symbol": "SANWARIA.BSE",
    "name": "Sanwaria Consumer Limited"
  },
  {
    "symbol": "SAPPHIRE.BSE",
    "name": "Sapphire Foods India Limited"
  },
  {
    "symbol": "SARDAEN.BSE",
    "name": "Sarda Energy & Minerals Limited"
  },
  {
    "symbol": "SAREGAMA.BSE",
    "name": "Saregama India Limited"
  },
  {
    "symbol": "SARLAPOLY.BSE",
    "name": "Sarla Performance Fibers Limited"
  },
  {
    "symbol": "SARVESHWAR.BSE",
    "name": "Sarveshwar Foods Limited"
  },
  {
    "symbol": "SASKEN.BSE",
    "name": "Sasken Technologies Limited"
  },
  {
    "symbol": "SASTASUNDR.BSE",
    "name": "Sastasundar Ventures Limited"
  },
  {
    "symbol": "SATIA.BSE",
    "name": "Satia Industries Limited"
  },
  {
    "symbol": "SATIN.BSE",
    "name": "Satin Creditcare Network Limited"
  },
  {
    "symbol": "SATINDLTD.BSE",
    "name": "Sat Industries Limited"
  },
  {
    "symbol": "SAURASHCEM.BSE",
    "name": "Saurashtra Cement Limited"
  },
  {
    "symbol": "SBC.BSE",
    "name": "SBC Exports Limited"
  },
  {
    "symbol": "SBCL.BSE",
    "name": "Shivalik Bimetal Controls Limited"
  },
  {
    "symbol": "SBFC.BSE",
    "name": "SBFC Finance Limited"
  },
  {
    "symbol": "SBGLP.BSE",
    "name": "Suratwwala Business Group Limited"
  },
  {
    "symbol": "SBICARD.BSE",
    "name": "SBI Cards and Payment Services Limited"
  },
  {
    "symbol": "SBILIFE.BSE",
    "name": "SBI Life Insurance Company Limited"
  },
  {
    "symbol": "SBIN.BSE",
    "name": "State Bank of India"
  },
  {
    "symbol": "SCHAEFFLER.BSE",
    "name": "Schaeffler India Limited"
  },
  {
    "symbol": "SCHAND.BSE",
    "name": "S Chand And Company Limited"
  },
  {
    "symbol": "SCHNEIDER.BSE",
    "name": "Schneider Electric Infrastructure Limited"
  },
  {
    "symbol": "SCI.BSE",
    "name": "Shipping Corporation Of India Limited"
  },
  {
    "symbol": "SCILAL.BSE",
    "name": "Shipping Corporation of India Land and Assets Limited"
  },
  {
    "symbol": "SCPL.BSE",
    "name": "Sheetal Cool Products Limited"
  },
  {
    "symbol": "SDBL.BSE",
    "name": "Som Distilleries & Breweries Limited"
  },
  {
    "symbol": "SEAMECLTD.BSE",
    "name": "Seamec Limited"
  },
  {
    "symbol": "SECMARK.BSE",
    "name": "SecMark Consultancy Limited"
  },
  {
    "symbol": "SECURKLOUD.BSE",
    "name": "SECUREKLOUD TECHNOLOGIES LIMITED"
  },
  {
    "symbol": "SEJALLTD.BSE",
    "name": "Sejal Glass Limited"
  },
  {
    "symbol": "SELAN.BSE",
    "name": "Selan Exploration Technology Limited"
  },
  {
    "symbol": "SELMC.BSE",
    "name": "SEL Manufacturing Company Limited"
  },
  {
    "symbol": "SEMAC.BSE",
    "name": "SEMAC CONSULTANTS LIMITED"
  },
  {
    "symbol": "SENCO.BSE",
    "name": "Senco Gold Limited"
  },
  {
    "symbol": "SENORES.BSE",
    "name": "Senores Pharmaceuticals Limited"
  },
  {
    "symbol": "SEPC.BSE",
    "name": "SEPC Limited"
  },
  {
    "symbol": "SEQUENT.BSE",
    "name": "Sequent Scientific Limited"
  },
  {
    "symbol": "SERVOTECH.BSE",
    "name": "Servotech Renewable Power System Limited"
  },
  {
    "symbol": "SESHAPAPER.BSE",
    "name": "Seshasayee Paper and Boards Limited"
  },
  {
    "symbol": "SETCO.BSE",
    "name": "Setco Automotive Limited"
  },
  {
    "symbol": "SETUINFRA.BSE",
    "name": "Setubandhan Infrastructure Limited"
  },
  {
    "symbol": "SFL.BSE",
    "name": "Sheela Foam Limited"
  },
  {
    "symbol": "SGIL.BSE",
    "name": "Synergy Green Industries Limited"
  },
  {
    "symbol": "SGL.BSE",
    "name": "STL Global Limited"
  },
  {
    "symbol": "SGLTL.BSE",
    "name": "Standard Glass Lining Technology Limited"
  },
  {
    "symbol": "SHAH.BSE",
    "name": "Shah Metacorp Limited"
  },
  {
    "symbol": "SHAHALLOYS.BSE",
    "name": "Shah Alloys Limited"
  },
  {
    "symbol": "SHAILY.BSE",
    "name": "Shaily Engineering Plastics Limited"
  },
  {
    "symbol": "SHAKTIPUMP.BSE",
    "name": "Shakti Pumps (India) Limited"
  },
  {
    "symbol": "SHALBY.BSE",
    "name": "Shalby Limited"
  },
  {
    "symbol": "SHALPAINTS.BSE",
    "name": "Shalimar Paints Limited"
  },
  {
    "symbol": "SHANKARA.BSE",
    "name": "Shankara Building Products Limited"
  },
  {
    "symbol": "SHANTI.BSE",
    "name": "Shanti Overseas (India) Limited"
  },
  {
    "symbol": "SHANTIGEAR.BSE",
    "name": "Shanthi Gears Limited"
  },
  {
    "symbol": "SHARDACROP.BSE",
    "name": "Sharda Cropchem Limited"
  },
  {
    "symbol": "SHARDAMOTR.BSE",
    "name": "Sharda Motor Industries Limited"
  },
  {
    "symbol": "SHAREINDIA.BSE",
    "name": "Share India Securities Limited"
  },
  {
    "symbol": "SHEKHAWATI.BSE",
    "name": "Shekhawati Industries Limited"
  },
  {
    "symbol": "SHEMAROO.BSE",
    "name": "Shemaroo Entertainment Limited"
  },
  {
    "symbol": "SHILPAMED.BSE",
    "name": "Shilpa Medicare Limited"
  },
  {
    "symbol": "SHIVALIK.BSE",
    "name": "Shivalik Rasayan Limited"
  },
  {
    "symbol": "SHIVAMAUTO.BSE",
    "name": "Shivam Autotech Limited"
  },
  {
    "symbol": "SHIVAMILLS.BSE",
    "name": "Shiva Mills Limited"
  },
  {
    "symbol": "SHIVATEX.BSE",
    "name": "Shiva Texyarn Limited"
  },
  {
    "symbol": "SHK.BSE",
    "name": "S H Kelkar and Company Limited"
  },
  {
    "symbol": "SHOPERSTOP.BSE",
    "name": "Shoppers Stop Limited"
  },
  {
    "symbol": "SHRADHA.BSE",
    "name": "Shradha Infraprojects Limited"
  },
  {
    "symbol": "SHREDIGCEM.BSE",
    "name": "Shree Digvijay Cement Co.Ltd"
  },
  {
    "symbol": "SHREECEM.BSE",
    "name": "SHREE CEMENT LIMITED"
  },
  {
    "symbol": "SHREEPUSHK.BSE",
    "name": "Shree Pushkar Chemicals & Fertilisers Limited"
  },
  {
    "symbol": "SHREERAMA.BSE",
    "name": "Shree Rama Multi-Tech Limited"
  },
  {
    "symbol": "SHRENIK.BSE",
    "name": "Shrenik Limited"
  },
  {
    "symbol": "SHREYANIND.BSE",
    "name": "Shreyans Industries Limited"
  },
  {
    "symbol": "SHRIPISTON.BSE",
    "name": "Shriram Pistons & Rings Limited"
  },
  {
    "symbol": "SHRIRAMFIN.BSE",
    "name": "Shriram Finance Limited"
  },
  {
    "symbol": "SHRIRAMPPS.BSE",
    "name": "Shriram Properties Limited"
  },
  {
    "symbol": "SHYAMCENT.BSE",
    "name": "Shyam Century Ferrous Limited"
  },
  {
    "symbol": "SHYAMMETL.BSE",
    "name": "Shyam Metalics and Energy Limited"
  },
  {
    "symbol": "SHYAMTEL.BSE",
    "name": "Shyam Telecom Limited"
  },
  {
    "symbol": "SICALLOG.BSE",
    "name": "Sical Logistics Limited"
  },
  {
    "symbol": "SIEMENS.BSE",
    "name": "Siemens Limited"
  },
  {
    "symbol": "SIGACHI.BSE",
    "name": "Sigachi Industries Limited"
  },
  {
    "symbol": "SIGIND.BSE",
    "name": "Signet Industries Limited"
  },
  {
    "symbol": "SIGMA.BSE",
    "name": "Sigma Solve Limited"
  },
  {
    "symbol": "SIGNATURE.BSE",
    "name": "Signatureglobal (India) Limited"
  },
  {
    "symbol": "SIGNPOST.BSE",
    "name": "Signpost India Limited"
  },
  {
    "symbol": "SIKKO.BSE",
    "name": "Sikko Industries Limited"
  },
  {
    "symbol": "SIL.BSE",
    "name": "Standard Industries Limited"
  },
  {
    "symbol": "SILGO.BSE",
    "name": "Silgo Retail Limited"
  },
  {
    "symbol": "SILINV.BSE",
    "name": "SIL Investments Limited"
  },
  {
    "symbol": "SILLYMONKS.BSE",
    "name": "Silly Monks Entertainment Limited"
  },
  {
    "symbol": "SILVERTUC.BSE",
    "name": "Silver Touch Technologies Limited"
  },
  {
    "symbol": "SIMBHALS.BSE",
    "name": "Simbhaoli Sugars Limited"
  },
  {
    "symbol": "SIMPLEXINF.BSE",
    "name": "Simplex Infrastructures Limited"
  },
  {
    "symbol": "SINCLAIR.BSE",
    "name": "Sinclairs Hotels Limited"
  },
  {
    "symbol": "SINDHUTRAD.BSE",
    "name": "Sindhu Trade Links Limited"
  },
  {
    "symbol": "SINTERCOM.BSE",
    "name": "Sintercom India Limited"
  },
  {
    "symbol": "SIRCA.BSE",
    "name": "Sirca Paints India Limited"
  },
  {
    "symbol": "SIS.BSE",
    "name": "SIS LIMITED"
  },
  {
    "symbol": "SITINET.BSE",
    "name": "Siti Networks Limited"
  },
  {
    "symbol": "SIYSIL.BSE",
    "name": "Siyaram Silk Mills Limited"
  },
  {
    "symbol": "SJS.BSE",
    "name": "S.J.S. Enterprises Limited"
  },
  {
    "symbol": "SJVN.BSE",
    "name": "SJVN Limited"
  },
  {
    "symbol": "SKFINDIA.BSE",
    "name": "SKF India Limited"
  },
  {
    "symbol": "SKIPPER.BSE",
    "name": "Skipper Limited"
  },
  {
    "symbol": "SKMEGGPROD.BSE",
    "name": "SKM Egg Products Export (India) Limited"
  },
  {
    "symbol": "SKYGOLD.BSE",
    "name": "SKY GOLD AND DIAMONDS LIMITED"
  },
  {
    "symbol": "SMARTLINK.BSE",
    "name": "Smartlink Holdings Limited"
  },
  {
    "symbol": "SMCGLOBAL.BSE",
    "name": "SMC Global Securities Limited"
  },
  {
    "symbol": "SMLISUZU.BSE",
    "name": "SML Isuzu Limited"
  },
  {
    "symbol": "SMLT.BSE",
    "name": "Sarthak Metals Limited"
  },
  {
    "symbol": "SMSLIFE.BSE",
    "name": "SMS Lifesciences India Limited"
  },
  {
    "symbol": "SMSPHARMA.BSE",
    "name": "SMS Pharmaceuticals Limited"
  },
  {
    "symbol": "SNOWMAN.BSE",
    "name": "Snowman Logistics Limited"
  },
  {
    "symbol": "SOBHA.BSE",
    "name": "Sobha Limited"
  },
  {
    "symbol": "SOFTTECH.BSE",
    "name": "Softtech Engineers Limited"
  },
  {
    "symbol": "SOLARA.BSE",
    "name": "Solara Active Pharma Sciences Limited"
  },
  {
    "symbol": "SOLARINDS.BSE",
    "name": "Solar Industries India Limited"
  },
  {
    "symbol": "SOMANYCERA.BSE",
    "name": "Somany Ceramics Limited"
  },
  {
    "symbol": "SOMATEX.BSE",
    "name": "Soma Textiles & Industries Limited"
  },
  {
    "symbol": "SOMICONVEY.BSE",
    "name": "Somi Conveyor Beltings Limited"
  },
  {
    "symbol": "SONACOMS.BSE",
    "name": "Sona BLW Precision Forgings Limited"
  },
  {
    "symbol": "SONAMLTD.BSE",
    "name": "SONAM LIMITED"
  },
  {
    "symbol": "SONATSOFTW.BSE",
    "name": "Sonata Software Limited"
  },
  {
    "symbol": "SOTL.BSE",
    "name": "Savita Oil Technologies Limited"
  },
  {
    "symbol": "SOUTHBANK.BSE",
    "name": "The South Indian Bank Limited"
  },
  {
    "symbol": "SOUTHWEST.BSE",
    "name": "South West Pinnacle Exploration Limited"
  },
  {
    "symbol": "SPAL.BSE",
    "name": "S. P. Apparels Limited"
  },
  {
    "symbol": "SPANDANA.BSE",
    "name": "Spandana Sphoorty Financial Limited"
  },
  {
    "symbol": "SPARC.BSE",
    "name": "Sun Pharma Advanced Research Company Limited"
  },
  {
    "symbol": "SPCENET.BSE",
    "name": "Spacenet Enterprises India Limited"
  },
  {
    "symbol": "SPECIALITY.BSE",
    "name": "Speciality Restaurants Limited"
  },
  {
    "symbol": "SPECTRUM.BSE",
    "name": "Spectrum Electrical Industries Limited"
  },
  {
    "symbol": "SPENCERS.BSE",
    "name": "Spencer's Retail Limited"
  },
  {
    "symbol": "SPIC.BSE",
    "name": "Southern Petrochemicals Industries Corporation  Limited"
  },
  {
    "symbol": "SPLIL.BSE",
    "name": "SPL Industries Limited"
  },
  {
    "symbol": "SPLPETRO.BSE",
    "name": "Supreme Petrochem Limited"
  },
  {
    "symbol": "SPMLINFRA.BSE",
    "name": "SPML Infra Limited"
  },
  {
    "symbol": "SPORTKING.BSE",
    "name": "Sportking India Limited"
  },
  {
    "symbol": "SRD.BSE",
    "name": "Shankar Lal Rampal Dye-Chem Limited"
  },
  {
    "symbol": "SREEL.BSE",
    "name": "Sreeleathers Limited"
  },
  {
    "symbol": "SRF.BSE",
    "name": "SRF Limited"
  },
  {
    "symbol": "SRGHFL.BSE",
    "name": "SRG Housing Finance Limited"
  },
  {
    "symbol": "SRHHYPOLTD.BSE",
    "name": "Sree Rayalaseema Hi-Strength Hypo Limited"
  },
  {
    "symbol": "SRM.BSE",
    "name": "SRM Contractors Limited"
  },
  {
    "symbol": "SRPL.BSE",
    "name": "Shree Ram Proteins Limited"
  },
  {
    "symbol": "SSDL.BSE",
    "name": "Saraswati Saree Depot Limited"
  },
  {
    "symbol": "SSWL.BSE",
    "name": "Steel Strips Wheels Limited"
  },
  {
    "symbol": "STALLION.BSE",
    "name": "Stallion India Fluorochemicals Limited"
  },
  {
    "symbol": "STANLEY.BSE",
    "name": "Stanley Lifestyles Limited"
  },
  {
    "symbol": "STAR.BSE",
    "name": "Strides Pharma Science Limited"
  },
  {
    "symbol": "STARCEMENT.BSE",
    "name": "Star Cement Limited"
  },
  {
    "symbol": "STARHEALTH.BSE",
    "name": "Star Health and Allied Insurance Company Limited"
  },
  {
    "symbol": "STARPAPER.BSE",
    "name": "Star Paper Mills Limited"
  },
  {
    "symbol": "STARTECK.BSE",
    "name": "Starteck Finance Limited"
  },
  {
    "symbol": "STCINDIA.BSE",
    "name": "The State Trading Corporation of India Limited"
  },
  {
    "symbol": "STEELCAS.BSE",
    "name": "Steelcast Limited"
  },
  {
    "symbol": "STEELCITY.BSE",
    "name": "Steel City Securities Limited"
  },
  {
    "symbol": "STEELXIND.BSE",
    "name": "STEEL EXCHANGE INDIA LIMITED"
  },
  {
    "symbol": "STEL.BSE",
    "name": "Stel Holdings Limited"
  },
  {
    "symbol": "STERTOOLS.BSE",
    "name": "Sterling Tools Limited"
  },
  {
    "symbol": "STLTECH.BSE",
    "name": "Sterlite Technologies Limited"
  },
  {
    "symbol": "STOVEKRAFT.BSE",
    "name": "Stove Kraft Limited"
  },
  {
    "symbol": "STYLAMIND.BSE",
    "name": "Stylam Industries Limited"
  },
  {
    "symbol": "STYLEBAAZA.BSE",
    "name": "Baazar Style Retail Limited"
  },
  {
    "symbol": "STYRENIX.BSE",
    "name": "Styrenix Performance Materials Limited"
  },
  {
    "symbol": "SUBEXLTD.BSE",
    "name": "Subex Limited"
  },
  {
    "symbol": "SUBROS.BSE",
    "name": "Subros Limited"
  },
  {
    "symbol": "SUDARSCHEM.BSE",
    "name": "Sudarshan Chemical Industries Limited"
  },
  {
    "symbol": "SUKHJITS.BSE",
    "name": "Sukhjit Starch & Chemicals Limited"
  },
  {
    "symbol": "SULA.BSE",
    "name": "Sula Vineyards Limited"
  },
  {
    "symbol": "SUMICHEM.BSE",
    "name": "Sumitomo Chemical India Limited"
  },
  {
    "symbol": "SUMIT.BSE",
    "name": "Sumit Woods Limited"
  },
  {
    "symbol": "SUMMITSEC.BSE",
    "name": "Summit Securities Limited"
  },
  {
    "symbol": "SUNCLAY.BSE",
    "name": "Sundaram Clayton Limited"
  },
  {
    "symbol": "SUNDARAM.BSE",
    "name": "Sundaram Multi Pap Limited"
  },
  {
    "symbol": "SUNDARMFIN.BSE",
    "name": "Sundaram Finance Limited"
  },
  {
    "symbol": "SUNDARMHLD.BSE",
    "name": "Sundaram Finance Holdings Limited"
  },
  {
    "symbol": "SUNDRMBRAK.BSE",
    "name": "Sundaram Brake Linings Limited"
  },
  {
    "symbol": "SUNDRMFAST.BSE",
    "name": "Sundram Fasteners Limited"
  },
  {
    "symbol": "SUNDROP.BSE",
    "name": "Sundrop Brands Limited"
  },
  {
    "symbol": "SUNFLAG.BSE",
    "name": "Sunflag Iron And Steel Company Limited"
  },
  {
    "symbol": "SUNPHARMA.BSE",
    "name": "Sun Pharmaceutical Industries Limited"
  },
  {
    "symbol": "SUNTECK.BSE",
    "name": "Sunteck Realty Limited"
  },
  {
    "symbol": "SUNTV.BSE",
    "name": "Sun TV Network Limited"
  },
  {
    "symbol": "SUPERHOUSE.BSE",
    "name": "Superhouse Limited"
  },
  {
    "symbol": "SUPERSPIN.BSE",
    "name": "Super Spinning Mills Limited"
  },
  {
    "symbol": "SUPRAJIT.BSE",
    "name": "Suprajit Engineering Limited"
  },
  {
    "symbol": "SUPREME.BSE",
    "name": "Supreme Holdings & Hospitality (India) Limited"
  },
  {
    "symbol": "SUPREMEENG.BSE",
    "name": "Supreme Engineering Limited"
  },
  {
    "symbol": "SUPREMEIND.BSE",
    "name": "Supreme Industries Limited"
  },
  {
    "symbol": "SUPREMEINF.BSE",
    "name": "Supreme Infrastructure India Limited"
  },
  {
    "symbol": "SUPRIYA.BSE",
    "name": "Supriya Lifescience Limited"
  },
  {
    "symbol": "SURAJEST.BSE",
    "name": "Suraj Estate Developers Limited"
  },
  {
    "symbol": "SURAJLTD.BSE",
    "name": "Suraj Limited"
  },
  {
    "symbol": "SURAKSHA.BSE",
    "name": "Suraksha Diagnostic Limited"
  },
  {
    "symbol": "SURANASOL.BSE",
    "name": "Surana Solar Limited"
  },
  {
    "symbol": "SURANAT&P.BSE",
    "name": "Surana Telecom and Power Limited"
  },
  {
    "symbol": "SURYALAXMI.BSE",
    "name": "Suryalakshmi Cotton Mills Limited"
  },
  {
    "symbol": "SURYAROSNI.BSE",
    "name": "Surya Roshni Limited"
  },
  {
    "symbol": "SURYODAY.BSE",
    "name": "Suryoday Small Finance Bank Limited"
  },
  {
    "symbol": "SUTLEJTEX.BSE",
    "name": "Sutlej Textiles and Industries Limited"
  },
  {
    "symbol": "SUULD.BSE",
    "name": "Suumaya Industries Limited"
  },
  {
    "symbol": "SUVEN.BSE",
    "name": "Suven Life Sciences Limited"
  },
  {
    "symbol": "SUVENPHAR.BSE",
    "name": "Suven Pharmaceuticals Limited"
  },
  {
    "symbol": "SUVIDHAA.BSE",
    "name": "Suvidhaa Infoserve Limited"
  },
  {
    "symbol": "SUYOG.BSE",
    "name": "Suyog Telematics Limited"
  },
  {
    "symbol": "SUZLON.BSE",
    "name": "Suzlon Energy Limited"
  },
  {
    "symbol": "SVLL.BSE",
    "name": "Shree Vasu Logistics Limited"
  },
  {
    "symbol": "SVPGLOB.BSE",
    "name": "SVP GLOBAL TEXTILES LIMITED"
  },
  {
    "symbol": "SWANENERGY.BSE",
    "name": "Swan Energy Limited"
  },
  {
    "symbol": "SWARAJENG.BSE",
    "name": "Swaraj Engines Limited"
  },
  {
    "symbol": "SWELECTES.BSE",
    "name": "Swelect Energy Systems Limited"
  },
  {
    "symbol": "SWIGGY.BSE",
    "name": "Swiggy Limited"
  },
  {
    "symbol": "SWSOLAR.BSE",
    "name": "Sterling and Wilson Renewable Energy Limited"
  },
  {
    "symbol": "SYMPHONY.BSE",
    "name": "Symphony Limited"
  },
  {
    "symbol": "SYNCOMF.BSE",
    "name": "Syncom Formulations (India) Limited"
  },
  {
    "symbol": "SYNGENE.BSE",
    "name": "Syngene International Limited"
  },
  {
    "symbol": "SYRMA.BSE",
    "name": "Syrma SGS Technology Limited"
  },
  {
    "symbol": "TAINWALCHM.BSE",
    "name": "Tainwala Chemical and Plastic (I) Limited"
  },
  {
    "symbol": "TAJGVK.BSE",
    "name": "Taj GVK Hotels & Resorts Limited"
  },
  {
    "symbol": "TAKE.BSE",
    "name": "Take Solutions Limited"
  },
  {
    "symbol": "TALBROAUTO.BSE",
    "name": "Talbros Automotive Components Limited"
  },
  {
    "symbol": "TANLA.BSE",
    "name": "Tanla Platforms Limited"
  },
  {
    "symbol": "TARACHAND.BSE",
    "name": "Tara Chand InfraLogistic Solutions Limited"
  },
  {
    "symbol": "TARAPUR.BSE",
    "name": "Tarapur Transformers Limited"
  },
  {
    "symbol": "TARC.BSE",
    "name": "TARC Limited"
  },
  {
    "symbol": "TARIL.BSE",
    "name": "Transformers And Rectifiers (India) Limited"
  },
  {
    "symbol": "TARMAT.BSE",
    "name": "Tarmat Limited"
  },
  {
    "symbol": "TARSONS.BSE",
    "name": "Tarsons Products Limited"
  },
  {
    "symbol": "TASTYBITE.BSE",
    "name": "Tasty Bite Eatables Limited"
  },
  {
    "symbol": "TATACHEM.BSE",
    "name": "Tata Chemicals Limited"
  },
  {
    "symbol": "TATACOMM.BSE",
    "name": "Tata Communications Limited"
  },
  {
    "symbol": "TATACONSUM.BSE",
    "name": "TATA CONSUMER PRODUCTS LIMITED"
  },
  {
    "symbol": "TATAELXSI.BSE",
    "name": "Tata Elxsi Limited"
  },
  {
    "symbol": "TATAINVEST.BSE",
    "name": "Tata Investment Corporation Limited"
  },
  {
    "symbol": "TATAMOTORS.BSE",
    "name": "Tata Motors Limited"
  },
  {
    "symbol": "TATAPOWER.BSE",
    "name": "Tata Power Company Limited"
  },
  {
    "symbol": "TATASTEEL.BSE",
    "name": "Tata Steel Limited"
  },
  {
    "symbol": "TATATECH.BSE",
    "name": "Tata Technologies Limited"
  },
  {
    "symbol": "TATVA.BSE",
    "name": "Tatva Chintan Pharma Chem Limited"
  },
  {
    "symbol": "TBOTEK.BSE",
    "name": "TBO Tek Limited"
  },
  {
    "symbol": "TBZ.BSE",
    "name": "Tribhovandas Bhimji Zaveri Limited"
  },
  {
    "symbol": "TCI.BSE",
    "name": "Transport Corporation of India Limited"
  },
  {
    "symbol": "TCIEXP.BSE",
    "name": "TCI Express Limited"
  },
  {
    "symbol": "TCIFINANCE.BSE",
    "name": "TCI Finance Limited"
  },
  {
    "symbol": "TCPLPACK.BSE",
    "name": "TCPL Packaging Limited"
  },
  {
    "symbol": "TCS.BSE",
    "name": "Tata Consultancy Services Limited"
  },
  {
    "symbol": "TDPOWERSYS.BSE",
    "name": "TD Power Systems Limited"
  },
  {
    "symbol": "TEAMLEASE.BSE",
    "name": "Teamlease Services Limited"
  },
  {
    "symbol": "TECHM.BSE",
    "name": "Tech Mahindra Limited"
  },
  {
    "symbol": "TECHNOE.BSE",
    "name": "Techno Electric & Engineering Company Limited"
  },
  {
    "symbol": "TEGA.BSE",
    "name": "Tega Industries Limited"
  },
  {
    "symbol": "TEJASNET.BSE",
    "name": "Tejas Networks Limited"
  },
  {
    "symbol": "TEMBO.BSE",
    "name": "Tembo Global Industries Limited"
  },
  {
    "symbol": "TERASOFT.BSE",
    "name": "Tera Software Limited"
  },
  {
    "symbol": "TEXINFRA.BSE",
    "name": "Texmaco Infrastructure & Holdings Limited"
  },
  {
    "symbol": "TEXMOPIPES.BSE",
    "name": "Texmo Pipes and Products Limited"
  },
  {
    "symbol": "TEXRAIL.BSE",
    "name": "Texmaco Rail & Engineering Limited"
  },
  {
    "symbol": "TFCILTD.BSE",
    "name": "Tourism Finance Corporation of India Limited"
  },
  {
    "symbol": "TFL.BSE",
    "name": "Transwarranty Finance Limited"
  },
  {
    "symbol": "TGBHOTELS.BSE",
    "name": "TGB Banquets And Hotels Limited"
  },
  {
    "symbol": "THANGAMAYL.BSE",
    "name": "Thangamayil Jewellery Limited"
  },
  {
    "symbol": "THEINVEST.BSE",
    "name": "The Investment Trust Of India Limited"
  },
  {
    "symbol": "THEJO.BSE",
    "name": "Thejo Engineering Limited"
  },
  {
    "symbol": "THEMISMED.BSE",
    "name": "Themis Medicare Limited"
  },
  {
    "symbol": "THERMAX.BSE",
    "name": "Thermax Limited"
  },
  {
    "symbol": "THOMASCOOK.BSE",
    "name": "Thomas Cook  (India)  Limited"
  },
  {
    "symbol": "THOMASCOTT.BSE",
    "name": "Thomas Scott (India) Limited"
  },
  {
    "symbol": "THYROCARE.BSE",
    "name": "Thyrocare Technologies Limited"
  },
  {
    "symbol": "TI.BSE",
    "name": "Tilaknagar Industries Limited"
  },
  {
    "symbol": "TICL.BSE",
    "name": "Twamev Construction and Infrastructure Limited"
  },
  {
    "symbol": "TIIL.BSE",
    "name": "Technocraft Industries (India) Limited"
  },
  {
    "symbol": "TIINDIA.BSE",
    "name": "Tube Investments of India Limited"
  },
  {
    "symbol": "TIJARIA.BSE",
    "name": "Tijaria Polypipes Limited"
  },
  {
    "symbol": "TIL.BSE",
    "name": "TIL Limited"
  },
  {
    "symbol": "TIMESGTY.BSE",
    "name": "Times Guaranty Limited"
  },
  {
    "symbol": "TIMETECHNO.BSE",
    "name": "Time Technoplast Limited"
  },
  {
    "symbol": "TIMKEN.BSE",
    "name": "Timken India Limited"
  },
  {
    "symbol": "TINNARUBR.BSE",
    "name": "Tinna Rubber and Infrastructure Limited"
  },
  {
    "symbol": "TIPSFILMS.BSE",
    "name": "Tips Films Limited"
  },
  {
    "symbol": "TIPSMUSIC.BSE",
    "name": "Tips Music Limited"
  },
  {
    "symbol": "TIRUMALCHM.BSE",
    "name": "Thirumalai Chemicals Limited"
  },
  {
    "symbol": "TIRUPATIFL.BSE",
    "name": "Tirupati Forge Limited"
  },
  {
    "symbol": "TITAGARH.BSE",
    "name": "TITAGARH RAIL SYSTEMS LIMITED"
  },
  {
    "symbol": "TITAN.BSE",
    "name": "Titan Company Limited"
  },
  {
    "symbol": "TMB.BSE",
    "name": "Tamilnad Mercantile Bank Limited"
  },
  {
    "symbol": "TNPETRO.BSE",
    "name": "Tamilnadu PetroProducts Limited"
  },
  {
    "symbol": "TNPL.BSE",
    "name": "Tamil Nadu Newsprint & Papers Limited"
  },
  {
    "symbol": "TNTELE.BSE",
    "name": "Tamilnadu Telecommunication Limited"
  },
  {
    "symbol": "TOKYOPLAST.BSE",
    "name": "Tokyo Plast International Limited"
  },
  {
    "symbol": "TOLINS.BSE",
    "name": "Tolins Tyres Limited"
  },
  {
    "symbol": "TORNTPHARM.BSE",
    "name": "Torrent Pharmaceuticals Limited"
  },
  {
    "symbol": "TORNTPOWER.BSE",
    "name": "Torrent Power Limited"
  },
  {
    "symbol": "TOTAL.BSE",
    "name": "Total Transport Systems Limited"
  },
  {
    "symbol": "TOUCHWOOD.BSE",
    "name": "Touchwood Entertainment Limited"
  },
  {
    "symbol": "TPHQ.BSE",
    "name": "Teamo Productions HQ Limited"
  },
  {
    "symbol": "TPLPLASTEH.BSE",
    "name": "TPL Plastech Limited"
  },
  {
    "symbol": "TRACXN.BSE",
    "name": "Tracxn Technologies Limited"
  },
  {
    "symbol": "TRANSRAILL.BSE",
    "name": "Transrail Lighting Limited"
  },
  {
    "symbol": "TRANSWORLD.BSE",
    "name": "TRANSWORLD SHIPPING LINES LIMITED"
  },
  {
    "symbol": "TREEHOUSE.BSE",
    "name": "Tree House Education & Accessories Limited"
  },
  {
    "symbol": "TREJHARA.BSE",
    "name": "TREJHARA SOLUTIONS LIMITED"
  },
  {
    "symbol": "TREL.BSE",
    "name": "Transindia Real Estate Limited"
  },
  {
    "symbol": "TRENT.BSE",
    "name": "Trent Limited"
  },
  {
    "symbol": "TRF.BSE",
    "name": "TRF Limited"
  },
  {
    "symbol": "TRIDENT.BSE",
    "name": "Trident Limited"
  },
  {
    "symbol": "TRIGYN.BSE",
    "name": "Trigyn Technologies Limited"
  },
  {
    "symbol": "TRITURBINE.BSE",
    "name": "Triveni Turbine Limited"
  },
  {
    "symbol": "TRIVENI.BSE",
    "name": "Triveni Engineering & Industries Limited"
  },
  {
    "symbol": "TRU.BSE",
    "name": "TruCap Finance Limited"
  },
  {
    "symbol": "TTKHLTCARE.BSE",
    "name": "TTK Healthcare Limited"
  },
  {
    "symbol": "TTKPRESTIG.BSE",
    "name": "TTK Prestige Limited"
  },
  {
    "symbol": "TTL.BSE",
    "name": "T T Limited"
  },
  {
    "symbol": "TTML.BSE",
    "name": "Tata Teleservices (Maharashtra) Limited"
  },
  {
    "symbol": "TVSELECT.BSE",
    "name": "TVS Electronics Limited"
  },
  {
    "symbol": "TVSHLTD.BSE",
    "name": "TVS Holdings Limited"
  },
  {
    "symbol": "TVSMOTOR.BSE",
    "name": "TVS Motor Company Limited"
  },
  {
    "symbol": "TVSSCS.BSE",
    "name": "TVS Supply Chain Solutions Limited"
  },
  {
    "symbol": "TVSSRICHAK.BSE",
    "name": "TVS Srichakra Limited"
  },
  {
    "symbol": "TVTODAY.BSE",
    "name": "TV Today Network Limited"
  },
  {
    "symbol": "TVVISION.BSE",
    "name": "TV Vision Limited"
  },
  {
    "symbol": "UBL.BSE",
    "name": "United Breweries Limited"
  },
  {
    "symbol": "UCAL.BSE",
    "name": "UCAL LIMITED"
  },
  {
    "symbol": "UCOBANK.BSE",
    "name": "UCO Bank"
  },
  {
    "symbol": "UDAICEMENT.BSE",
    "name": "Udaipur Cement Works Limited"
  },
  {
    "symbol": "UDS.BSE",
    "name": "Updater Services Limited"
  },
  {
    "symbol": "UFLEX.BSE",
    "name": "UFLEX Limited"
  },
  {
    "symbol": "UFO.BSE",
    "name": "UFO Moviez India Limited"
  },
  {
    "symbol": "UGARSUGAR.BSE",
    "name": "The Ugar Sugar Works Limited"
  },
  {
    "symbol": "UGROCAP.BSE",
    "name": "Ugro Capital Limited"
  },
  {
    "symbol": "UJJIVANSFB.BSE",
    "name": "Ujjivan Small Finance Bank Limited"
  },
  {
    "symbol": "ULTRACEMCO.BSE",
    "name": "UltraTech Cement Limited"
  },
  {
    "symbol": "UMAEXPORTS.BSE",
    "name": "Uma Exports Limited"
  },
  {
    "symbol": "UMANGDAIRY.BSE",
    "name": "Umang Dairies Limited"
  },
  {
    "symbol": "UMESLTD.BSE",
    "name": "Usha Martin Education & Solutions Limited"
  },
  {
    "symbol": "UMIYA-MRO.BSE",
    "name": "UMIYA BUILDCON LIMITED"
  },
  {
    "symbol": "UNICHEMLAB.BSE",
    "name": "Unichem Laboratories Limited"
  },
  {
    "symbol": "UNIDT.BSE",
    "name": "United Drilling Tools Limited"
  },
  {
    "symbol": "UNIECOM.BSE",
    "name": "Unicommerce Esolutions Limited"
  },
  {
    "symbol": "UNIENTER.BSE",
    "name": "Uniphos Enterprises Limited"
  },
  {
    "symbol": "UNIINFO.BSE",
    "name": "Uniinfo Telecom Services Limited"
  },
  {
    "symbol": "UNIMECH.BSE",
    "name": "Unimech Aerospace and Manufacturing Limited"
  },
  {
    "symbol": "UNIONBANK.BSE",
    "name": "Union Bank of India"
  },
  {
    "symbol": "UNIPARTS.BSE",
    "name": "Uniparts India Limited"
  },
  {
    "symbol": "UNITDSPR.BSE",
    "name": "United Spirits Limited"
  },
  {
    "symbol": "UNITECH.BSE",
    "name": "Unitech Limited"
  },
  {
    "symbol": "UNITEDPOLY.BSE",
    "name": "United Polyfab Gujarat Limited"
  },
  {
    "symbol": "UNITEDTEA.BSE",
    "name": "The United Nilgiri Tea Estates Company Limited"
  },
  {
    "symbol": "UNIVASTU.BSE",
    "name": "Univastu India Limited"
  },
  {
    "symbol": "UNIVCABLES.BSE",
    "name": "Universal Cables Limited"
  },
  {
    "symbol": "UNIVPHOTO.BSE",
    "name": "Universus Photo Imagings Limited"
  },
  {
    "symbol": "UNOMINDA.BSE",
    "name": "UNO Minda Limited"
  },
  {
    "symbol": "UPL.BSE",
    "name": "UPL Limited"
  },
  {
    "symbol": "URAVIDEF.BSE",
    "name": "Uravi Defence and Technology Limited"
  },
  {
    "symbol": "URJA.BSE",
    "name": "Urja Global Limited"
  },
  {
    "symbol": "USHAMART.BSE",
    "name": "Usha Martin Limited"
  },
  {
    "symbol": "USK.BSE",
    "name": "Udayshivakumar Infra Limited"
  },
  {
    "symbol": "UTIAMC.BSE",
    "name": "UTI Asset Management Company Limited"
  },
  {
    "symbol": "UTKARSHBNK.BSE",
    "name": "Utkarsh Small Finance Bank Limited"
  },
  {
    "symbol": "UTTAMSUGAR.BSE",
    "name": "Uttam Sugar Mills Limited"
  },
  {
    "symbol": "UYFINCORP.BSE",
    "name": "U. Y. Fincorp Limited"
  },
  {
    "symbol": "V2RETAIL.BSE",
    "name": "V2 Retail Limited"
  },
  {
    "symbol": "VADILALIND.BSE",
    "name": "Vadilal Industries Limited"
  },
  {
    "symbol": "VAIBHAVGBL.BSE",
    "name": "Vaibhav Global Limited"
  },
  {
    "symbol": "VAISHALI.BSE",
    "name": "Vaishali Pharma Limited"
  },
  {
    "symbol": "VAKRANGEE.BSE",
    "name": "Vakrangee Limited"
  },
  {
    "symbol": "VALIANTLAB.BSE",
    "name": "Valiant Laboratories Limited"
  },
  {
    "symbol": "VALIANTORG.BSE",
    "name": "Valiant Organics Limited"
  },
  {
    "symbol": "VARDHACRLC.BSE",
    "name": "Vardhman Acrylics Limited"
  },
  {
    "symbol": "VARDMNPOLY.BSE",
    "name": "Vardhman Polytex Limited"
  },
  {
    "symbol": "VARROC.BSE",
    "name": "Varroc Engineering Limited"
  },
  {
    "symbol": "VASCONEQ.BSE",
    "name": "Vascon Engineers Limited"
  },
  {
    "symbol": "VASWANI.BSE",
    "name": "Vaswani Industries Limited"
  },
  {
    "symbol": "VBL.BSE",
    "name": "Varun Beverages Limited"
  },
  {
    "symbol": "VCL.BSE",
    "name": "Vaxtex Cotfab Limited"
  },
  {
    "symbol": "VEDL.BSE",
    "name": "Vedanta Limited"
  },
  {
    "symbol": "VEEDOL.BSE",
    "name": "Veedol Corporation Limited"
  },
  {
    "symbol": "VENKEYS.BSE",
    "name": "Venky's (India) Limited"
  },
  {
    "symbol": "VENTIVE.BSE",
    "name": "Ventive Hospitality Limited"
  },
  {
    "symbol": "VENUSPIPES.BSE",
    "name": "Venus Pipes & Tubes Limited"
  },
  {
    "symbol": "VENUSREM.BSE",
    "name": "Venus Remedies Limited"
  },
  {
    "symbol": "VERANDA.BSE",
    "name": "Veranda Learning Solutions Limited"
  },
  {
    "symbol": "VERTOZ.BSE",
    "name": "Vertoz Limited"
  },
  {
    "symbol": "VESUVIUS.BSE",
    "name": "Vesuvius India Limited"
  },
  {
    "symbol": "VETO.BSE",
    "name": "Veto Switchgears And Cables Limited"
  },
  {
    "symbol": "VGUARD.BSE",
    "name": "V-Guard Industries Limited"
  },
  {
    "symbol": "VHL.BSE",
    "name": "Vardhman Holdings Limited"
  },
  {
    "symbol": "VHLTD.BSE",
    "name": "Viceroy Hotels Limited"
  },
  {
    "symbol": "VIDHIING.BSE",
    "name": "Vidhi Specialty Food Ingredients Limited"
  },
  {
    "symbol": "VIJAYA.BSE",
    "name": "Vijaya Diagnostic Centre Limited"
  },
  {
    "symbol": "VIJIFIN.BSE",
    "name": "Viji Finance Limited"
  },
  {
    "symbol": "VIKASECO.BSE",
    "name": "Vikas EcoTech Limited"
  },
  {
    "symbol": "VIKASLIFE.BSE",
    "name": "Vikas Lifecare Limited"
  },
  {
    "symbol": "VIMTALABS.BSE",
    "name": "Vimta Labs Limited"
  },
  {
    "symbol": "VINATIORGA.BSE",
    "name": "Vinati Organics Limited"
  },
  {
    "symbol": "VINCOFE.BSE",
    "name": "Vintage Coffee And Beverages Limited"
  },
  {
    "symbol": "VINDHYATEL.BSE",
    "name": "Vindhya Telelinks Limited"
  },
  {
    "symbol": "VINEETLAB.BSE",
    "name": "Vineet Laboratories Limited"
  },
  {
    "symbol": "VINNY.BSE",
    "name": "Vinny Overseas Limited"
  },
  {
    "symbol": "VINYLINDIA.BSE",
    "name": "Vinyl Chemicals (India) Limited"
  },
  {
    "symbol": "VIPCLOTHNG.BSE",
    "name": "VIP Clothing Limited"
  },
  {
    "symbol": "VIPIND.BSE",
    "name": "VIP Industries Limited"
  },
  {
    "symbol": "VIPULLTD.BSE",
    "name": "Vipul Limited"
  },
  {
    "symbol": "VIRINCHI.BSE",
    "name": "Virinchi Limited"
  },
  {
    "symbol": "VISAKAIND.BSE",
    "name": "Visaka Industries Limited"
  },
  {
    "symbol": "VISASTEEL.BSE",
    "name": "Visa Steel Limited"
  },
  {
    "symbol": "VISHNU.BSE",
    "name": "Vishnu Chemicals Limited"
  },
  {
    "symbol": "VISHWARAJ.BSE",
    "name": "Vishwaraj Sugar Industries Limited"
  },
  {
    "symbol": "VIVIDHA.BSE",
    "name": "Visagar Polytex Limited"
  },
  {
    "symbol": "VLEGOV.BSE",
    "name": "VL E-Governance & IT Solutions Limited"
  },
  {
    "symbol": "VLSFINANCE.BSE",
    "name": "VLS Finance Limited"
  },
  {
    "symbol": "VMART.BSE",
    "name": "V-Mart Retail Limited"
  },
  {
    "symbol": "VMM.BSE",
    "name": "Vishal Mega Mart Limited"
  },
  {
    "symbol": "VOLTAMP.BSE",
    "name": "Voltamp Transformers Limited"
  },
  {
    "symbol": "VOLTAS.BSE",
    "name": "Voltas Limited"
  },
  {
    "symbol": "VPRPL.BSE",
    "name": "Vishnu Prakash R Punglia Limited"
  },
  {
    "symbol": "VRAJ.BSE",
    "name": "Vraj Iron and Steel Limited"
  },
  {
    "symbol": "VRLLOG.BSE",
    "name": "VRL Logistics Limited"
  },
  {
    "symbol": "VSSL.BSE",
    "name": "Vardhman Special Steels Limited"
  },
  {
    "symbol": "VSTIND.BSE",
    "name": "VST Industries Limited"
  },
  {
    "symbol": "VSTL.BSE",
    "name": "Vibhor Steel Tubes Limited"
  },
  {
    "symbol": "VSTTILLERS.BSE",
    "name": "V.S.T Tillers Tractors Limited"
  },
  {
    "symbol": "VTL.BSE",
    "name": "Vardhman Textiles Limited"
  },
  {
    "symbol": "WAAREEENER.BSE",
    "name": "Waaree Energies Limited"
  },
  {
    "symbol": "WAAREERTL.BSE",
    "name": "Waaree Renewable Technologies Limited"
  },
  {
    "symbol": "WABAG.BSE",
    "name": "VA Tech Wabag Limited"
  },
  {
    "symbol": "WALCHANNAG.BSE",
    "name": "Walchandnagar Industries Limited"
  },
  {
    "symbol": "WANBURY.BSE",
    "name": "Wanbury Limited"
  },
  {
    "symbol": "WCIL.BSE",
    "name": "Western Carriers (India) Limited"
  },
  {
    "symbol": "WEALTH.BSE",
    "name": "Wealth First Portfolio Managers Limited"
  },
  {
    "symbol": "WEBELSOLAR.BSE",
    "name": "Websol Energy System Limited"
  },
  {
    "symbol": "WEIZMANIND.BSE",
    "name": "Weizmann Limited"
  },
  {
    "symbol": "WEL.BSE",
    "name": "Wonder Electricals Limited"
  },
  {
    "symbol": "WELCORP.BSE",
    "name": "Welspun Corp Limited"
  },
  {
    "symbol": "WELENT.BSE",
    "name": "Welspun Enterprises Limited"
  },
  {
    "symbol": "WELINV.BSE",
    "name": "Welspun Investments and Commercials Limited"
  },
  {
    "symbol": "WELSPUNLIV.BSE",
    "name": "Welspun Living Limited"
  },
  {
    "symbol": "WENDT.BSE",
    "name": "Wendt (India) Limited"
  },
  {
    "symbol": "WESTLIFE.BSE",
    "name": "WESTLIFE FOODWORLD LIMITED"
  },
  {
    "symbol": "WEWIN.BSE",
    "name": "WE WIN LIMITED"
  },
  {
    "symbol": "WHEELS.BSE",
    "name": "Wheels India Limited"
  },
  {
    "symbol": "WHIRLPOOL.BSE",
    "name": "Whirlpool of India Limited"
  },
  {
    "symbol": "WILLAMAGOR.BSE",
    "name": "Williamson Magor & Company Limited"
  },
  {
    "symbol": "WINDLAS.BSE",
    "name": "Windlas Biotech Limited"
  },
  {
    "symbol": "WINDMACHIN.BSE",
    "name": "Windsor Machines Limited"
  },
  {
    "symbol": "WINSOME.BSE",
    "name": "Winsome Yarns Limited"
  },
  {
    "symbol": "WIPL.BSE",
    "name": "The Western India Plywoods Limited"
  },
  {
    "symbol": "WIPRO.BSE",
    "name": "Wipro Limited"
  },
  {
    "symbol": "WOCKPHARMA.BSE",
    "name": "Wockhardt Limited"
  },
  {
    "symbol": "WONDERLA.BSE",
    "name": "Wonderla Holidays Limited"
  },
  {
    "symbol": "WORTH.BSE",
    "name": "Worth Peripherals Limited"
  },
  {
    "symbol": "WSI.BSE",
    "name": "W S Industries (I) Limited"
  },
  {
    "symbol": "WSTCSTPAPR.BSE",
    "name": "West Coast Paper Mills Limited"
  },
  {
    "symbol": "XCHANGING.BSE",
    "name": "Xchanging Solutions Limited"
  },
  {
    "symbol": "XELPMOC.BSE",
    "name": "Xelpmoc Design And Tech Limited"
  },
  {
    "symbol": "XPROINDIA.BSE",
    "name": "Xpro India Limited"
  },
  {
    "symbol": "XTGLOBAL.BSE",
    "name": "Xtglobal Infotech Limited"
  },
  {
    "symbol": "YAARI.BSE",
    "name": "Yaari Digital Integrated Services Limited"
  },
  {
    "symbol": "YASHO.BSE",
    "name": "Yasho Industries Limited"
  },
  {
    "symbol": "YATHARTH.BSE",
    "name": "Yatharth Hospital & Trauma Care Services Limited"
  },
  {
    "symbol": "YATRA.BSE",
    "name": "Yatra Online Limited"
  },
  {
    "symbol": "YESBANK.BSE",
    "name": "Yes Bank Limited"
  },
  {
    "symbol": "YUKEN.BSE",
    "name": "Yuken India Limited"
  },
  {
    "symbol": "ZAGGLE.BSE",
    "name": "Zaggle Prepaid Ocean Services Limited"
  },
  {
    "symbol": "ZEEL.BSE",
    "name": "Zee Entertainment Enterprises Limited"
  },
  {
    "symbol": "ZEELEARN.BSE",
    "name": "Zee Learn Limited"
  },
  {
    "symbol": "ZEEMEDIA.BSE",
    "name": "Zee Media Corporation Limited"
  },
  {
    "symbol": "ZENITHEXPO.BSE",
    "name": "Zenith Exports Limited"
  },
  {
    "symbol": "ZENITHSTL.BSE",
    "name": "Zenith Steel Pipes & Industries Limited"
  },
  {
    "symbol": "ZENSARTECH.BSE",
    "name": "Zensar Technologies Limited"
  },
  {
    "symbol": "ZENTEC.BSE",
    "name": "Zen Technologies Limited"
  },
  {
    "symbol": "ZFCVINDIA.BSE",
    "name": "ZF Commercial Vehicle Control Systems India Limited"
  },
  {
    "symbol": "ZIMLAB.BSE",
    "name": "Zim Laboratories Limited"
  },
  {
    "symbol": "ZODIAC.BSE",
    "name": "Zodiac Energy Limited"
  },
  {
    "symbol": "ZODIACLOTH.BSE",
    "name": "Zodiac Clothing Company Limited"
  },
  {
    "symbol": "ZOTA.BSE",
    "name": "Zota Health Care LImited"
  },
  {
    "symbol": "ZUARI.BSE",
    "name": "Zuari Agro Chemicals Limited"
  },
  {
    "symbol": "ZUARIIND.BSE",
    "name": "ZUARI INDUSTRIES LIMITED"
  },
  {
    "symbol": "ZYDUSLIFE.BSE",
    "name": "Zydus Lifesciences Limited"
  },
  {
    "symbol": "ZYDUSWELL.BSE",
    "name": "Zydus Wellness Limited"
  }
];

export default stockList;