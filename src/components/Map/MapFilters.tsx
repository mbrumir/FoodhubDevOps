import React, {useState, useEffect} from 'react';
import { Form } from 'react-bulma-components';
import BasicSelect  from '../Select/Select';
import './MapFilters.css';



function handleGlobalClick (e: MouseEvent) {
	const target = e.target as HTMLElement;
	const priceSelect = document.querySelector('.price-select') as HTMLElement;
	const typeSelect = document.querySelector('.type-select') as HTMLElement;
	const creatorSelect = document.querySelector('.creator-select') as HTMLElement;


	const removeActiveSelects = () => {
		const allActiveSelects = document.querySelectorAll('.active');

		allActiveSelects.forEach(select => {
			select.classList.remove('active');
		})
	}

	if (target.closest('div')?.classList.contains('price-select')) {
		priceSelect.classList.toggle('active');
		typeSelect.classList.remove('active');
		creatorSelect.classList.remove('active');

	} else if (target.closest('div')?.classList.contains('type-select')) {
		typeSelect.classList.toggle('active');
		priceSelect.classList.remove('active');
		creatorSelect.classList.remove('active');

	} else if (target.closest('div')?.classList.contains('creator-select')) {
		creatorSelect.classList.toggle('active');
		priceSelect.classList.remove('active');
		typeSelect.classList.remove('active');

	} else {
		removeActiveSelects();
	}
}

const creatorsOptions = {
	Książulo: {
		value: 'UCqJuMiGXqB8Hl41YsGV_sMA',
		name: 'Książulo'
	},
	Wojek: {
		value: 'UC_1IqV4x5WCLdc6Qk1VMv0g',
		name: 'Wojek'
	},
}

const foodOptions = {
	Polish: {
		value: 'polish',
		name: 'Polskie'
	},
	Kebab: {
		value: 'kebab',
		name: 'Kebab'
	},
	Italian: {
		value: 'italian',
		name: 'Włoskie'
	},
	Burger: {
		value: 'burger',
		name: 'Burger'
	},
	MilkBar: {
		value: 'milk_bar',
		name: 'Bar mleczny'
	},
	Dessert: {
		value: 'dessert',
		name: 'Desery'
	},
	Asian: {
		value: 'asian',
		name: 'Azjatyckie'
	},
	FastFood: {
		// value: 'fastfood',
		value: 'american',
		name: 'Fast Food'
	},
	Mexico: {
		value: 'mexican',
		name: 'Meksykańskie'
	},
	Greek: {
		value: 'greek',
		name: 'Greckie'
	},
}

const priceOptions = {
	1: {
		value: '1',
		name: '$'
	},
	2: {
		value: '2',
		name: '$$'
	},
	3: {
		value: '3',
		name: '$$$'
	},
	4: {
		value: '4',
		name: '$$$$'
	},
	5: {
		value: '5',
		name: '$$$$$'
	},
}

function MapFilters({setFilters} : {setFilters: any}) {
	const [creatorOption, setCreatorOptions] = useState('Twórcy');
	const [foodOption, setFoodOptions] = useState('Rodzaj');
	const [priceOption, setPriceOptions] = useState('Cena');
	const [mualaOption, setMualaOption] = useState(false);

	React.useEffect(() => {
		document.addEventListener('click', handleGlobalClick);
	})

	useEffect(() => {
        setFilters({ creatorOption, foodOption, priceOption, mualaOption });
    }, [creatorOption, foodOption, priceOption, mualaOption, setFilters]);

	const handleMualaBtn = () => {
		const mualaBtn = document.querySelector('.muala_btn') as HTMLElement;

		if (mualaOption) {
			setMualaOption(false);
			mualaBtn.style.backgroundColor = 'white';
			mualaBtn.style.color = '#363636';
		} else {
			setMualaOption(true);
			mualaBtn.style.backgroundColor = '#ef931a';
			mualaBtn.style.color = '#fff';
		}
	}

	return (
		<div className={'map--filters'}>
				<div className="muala_btn">
					<Form.Checkbox onChange={handleMualaBtn}>MUALA</Form.Checkbox>
				</div>
				<div>
					<BasicSelect class="creator-select" options={Object.values(creatorsOptions)} title="Twórcy" change={(value :any) => setCreatorOptions(value)}/>
				</div>

				<div>
					<BasicSelect class="type-select" options={Object.values(foodOptions)} title="Rodzaj" change={(value :any) => setFoodOptions(value)} />
				</div>

				<div>
					<BasicSelect class="price-select" options={Object.values(priceOptions)} title="Cena" change={(value :any) => setPriceOptions(value)} />
				</div>
		</div>
	);
}

export default MapFilters;
