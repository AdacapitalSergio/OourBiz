/**
 * Detecta o país inicial com base na localidade ou fuso horário do navegador
 * @returns {string} Código do país de 2 letras (ex: 'br', 'ao')
 */
export const getInitialCountry = () => {
    try {
        const locale = navigator.language || navigator.userLanguage;
        if (locale) {
            const parts = locale.split('-');
            const countryCode = parts[parts.length - 1]?.toLowerCase();
            if (countryCode && countryCode.length === 2) {
                // Mapeia alguns casos comuns se necessário
                return countryCode;
            }
        }
        
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz) {
            const lowerTz = tz.toLowerCase();
            if (lowerTz.includes('luanda') || lowerTz.includes('angola') || lowerTz.includes('cabo_verde') || lowerTz.includes('mozambique') || lowerTz.includes('maputo')) {
                return 'ao';
            }
            if (lowerTz.includes('sao_paulo') || lowerTz.includes('brazil') || lowerTz.includes('rio') || lowerTz.includes('recife') || lowerTz.includes('manaus')) {
                return 'br';
            }
        }
    } catch (e) {
        console.error('Erro ao detectar o país:', e);
    }
    return 'br'; // Padrão
};
