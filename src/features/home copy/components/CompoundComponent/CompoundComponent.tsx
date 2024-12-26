import { createContext, useContext, useState } from 'react';

export const CompoundContext = createContext({
	isSelected: false
});
const CompoundComponent = ({ children }: { children: React.ReactNode }) => {
	const [isSelected, setIsSelected] = useState(false);
	return (
		<CompoundContext.Provider value={{ isSelected }}>
			<div onClick={() => setIsSelected(!isSelected)}>{children}</div>
		</CompoundContext.Provider>
	);
};
const Text = ({ children }: { children: React.ReactNode }) => {
	const { isSelected } = useContext(CompoundContext);
	return <>{isSelected ? children : <>no</>}</>;
};

export default CompoundComponent;

CompoundComponent.Text = Text;
