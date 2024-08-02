export interface PortfolioItemsProps {
    id: number; 
    title: string;
    description: string;
    image: string;
    category: string;
    
}

export interface HamburgerProps {
    isActive: boolean;
    onClick: () => void;
}