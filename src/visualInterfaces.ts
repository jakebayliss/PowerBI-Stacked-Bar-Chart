module powerbi.extensibility.visual {
    import IAxisProperties = powerbi.extensibility.utils.chart.axis.IAxisProperties;
    import SelectableDataPoint = powerbi.extensibility.utils.interactivity.SelectableDataPoint;
    import LegendData = powerbi.extensibility.utils.chart.legend.LegendData;
    import legend = powerbi.extensibility.utils.chart.legend;

    export interface IMargin {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }

    export interface ISize {
        width: number;
        height: number;
    }

    export interface IAxes {
        x: IAxisProperties;
        y: IAxisProperties;
        yIsScalar?: boolean;
    }

    export interface VisualDataRow {
        rects: VisualDataRect[];
        category: PrimitiveValue;
    }

    export interface VisualDataRect {
        value: PrimitiveValue;
        color?: string;
        selectionId?: ISelectionId;
    }

    export class VisualColumns {
        public Axis: DataViewValueColumn = null;
        public Legend: DataViewValueColumn = null;
        public Value: DataViewValueColumn[] | DataViewValueColumn = null;
        public Score: DataViewValueColumn[] | DataViewValueColumn = null;
        public Range: DataViewValueColumn[] | DataViewValueColumn = null;
        public ColorSaturation: DataViewValueColumn = null;
        public Tooltips: DataViewValueColumn[] | DataViewValueColumn = null;
        public ColumnBy: DataViewValueColumn = null;
        public RowBy: DataViewValueColumn = null;
        public GroupedValues: DataViewValueColumns = null;
    }

    /* export interface VisualData {
         dataRows: VisualDataRow[];
         size: ISize;
         axes: IAxes;
     }*/

    export interface VisualDataPoint extends SelectableDataPoint {
        value: number;
        valueForWidth: number;
        category: PrimitiveValue | number;
        shiftValue?: number;
        sum?: number;
        colorSaturation?: number;
        tooltips?: VisualTooltipDataItem[];
        series?: PrimitiveValue;
        color?: string;
        selectionId?: ISelectionId;
        highlight?: boolean;
        barCoordinates?: Coordinates;
        labelCoordinates?: Coordinates;
        columnBy?: PrimitiveValue;
        rowBy?: PrimitiveValue;         
        preSelected?: boolean;
        preRemoved?: boolean;
        score?: number
        range?: number [];
    }

    export interface Coordinates {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    export interface VisualData {
        dataPoints: VisualDataPoint[];
        legendData: LegendData;
        hasHighlight: boolean;
        isLegendNeeded: boolean;
        size?: ISize;
        axes: IAxes;
        categoriesCount: number;
        isSmallMultiple: boolean;
    }

    export interface IAxesSize {
        xAxisHeight: number;
        yAxisWidth: number;
    }

    export interface SmallMultipleSizeOptions extends ISize {
        isVerticalSliderNeeded: boolean;
        isHorizontalSliderNeeded: boolean;
    }

    export interface VisualMeasureMetadata {
        idx: VisualMeasureMetadataIndexes;
        cols: VisualMeasureMetadataColumns;
        labels: VisualAxesLabels;
        groupingColumn: DataViewMetadataColumn;
    }

    export interface VisualMeasureMetadataIndexes {
        category?: number;
        value?: number;
        y?: number;
        gradient?: number;
        columnBy?: number;
        rowBy?: number;
    }

    export interface VisualMeasureMetadataColumns {
        value?: DataViewMetadataColumn;
        category?: DataViewMetadataColumn;
    }

    export interface VisualAxesLabels {
        x: string;
        y: string;
    }

    export interface LegendSize {
        width: number;
        height: number;
    }

    export interface VisualTranslation {
        x: number;
        y: number;
    }

    export interface AxesDomains {
        yAxisDomain: number[];
        xAxisDomain: number[];
    }

    export type SelectionState = undefined | null | 'selected' | 'justSelected' | 'justRemoved';

    export interface CategoryDataPoints {
        categoryName: string;
        dataPoints: VisualDataPoint[];
    }

    export interface LegendProperties {
        legendObject: DataViewObject;
        data: LegendData;
        colors: string[];
    }

    export interface ChartOptions {
        maxYLabelWidth
    }

    export interface SmallMultipleOptions {
        rows: PrimitiveValue[],
        columns: PrimitiveValue[],
        chartSize: ISize,
        leftSpace: number,
        topSpace: number,
        textHeight?: number,
        chartElement: d3.Selection<any>,
        xAxisLabelSize: number,
        index?: number,
        rowsInFlow?: number
    }
}


